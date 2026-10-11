import {scrypt,randomBytes,timingSafeEqual,createHash} from 'node:crypto';
import {valid} from '../src/save';
interface Env {DB:D1Database;APP_ORIGIN:string;LOCAL_DEV?:string}
type UserRow={id:string;username:string;display_name:string;password_hash:string;salt:string};
const cookieName='__Host-venti_session';
const lifetime=60*60*24*30;
const hash=(s:string)=>createHash('sha256').update(s).digest('hex');
// OWASP scrypt configuration: N=2^14, r=8, p=5 (16 MiB memory).
const derive=(password:string,salt:string)=>new Promise<Buffer>((resolve,reject)=>scrypt(password,salt,64,{N:16384,r:8,p:5,maxmem:32*1024*1024},(error,key)=>error?reject(error):resolve(key)));
class HttpError extends Error {constructor(public status:number,message:string){super(message);}}
const publicUser=(u:UserRow)=>({id:u.id,username:u.display_name});
function cookie(env:Env,token:string,maxAge=lifetime){return `${env.LOCAL_DEV?'venti_dev_session':cookieName}=${token}; Path=/; HttpOnly; ${env.LOCAL_DEV?'':'Secure; '}SameSite=Lax; Max-Age=${maxAge}`;}
function tokenFrom(request:Request,env:Env){const name=env.LOCAL_DEV?'venti_dev_session':cookieName;return request.headers.get('Cookie')?.split(';').map(s=>s.trim()).find(s=>s.startsWith(name+'='))?.slice(name.length+1)||'';}
async function currentUser(request:Request,env:Env){const token=tokenFrom(request,env);if(!/^[a-f0-9]{64}$/.test(token))return null;return env.DB.prepare('SELECT u.id,u.username,u.display_name FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=? AND s.expires_at>?').bind(hash(token),Date.now()).first<UserRow>();}
async function rate(env:Env,key:string,limit:number,seconds:number){const now=Date.now();const row=await env.DB.prepare('INSERT INTO rate_limits(key,count,expires_at) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN expires_at<=? THEN 1 ELSE count+1 END, expires_at=CASE WHEN expires_at<=? THEN excluded.expires_at ELSE expires_at END RETURNING count').bind(hash(key),now+seconds*1000,now,now).first<{count:number}>();if(!row||row.count>limit)throw new HttpError(429,'风需要歇一会儿，请稍后再试。');}
async function body(request:Request){
 if(!request.headers.get('Content-Type')?.startsWith('application/json'))throw new HttpError(415,'请使用 JSON 请求。');
 const reader=request.body?.getReader();if(!reader)throw new HttpError(400,'请求内容无法读取。');
 const chunks:Uint8Array[]=[];let size=0;
 while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>100000){await reader.cancel();throw new HttpError(413,'存档太大了，请导出备份后再试。');}chunks.push(value);}
 const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
 try{const data=JSON.parse(new TextDecoder().decode(bytes));if(!data||typeof data!=='object'||Array.isArray(data))throw Error();return data;}catch{throw new HttpError(400,'请求内容无法读取。');}
}
async function handle(request:Request,env:Env):Promise<Response>{
 const path=new URL(request.url).pathname;const method=request.method;
 const origin=request.headers.get('Origin');
 if(origin&&origin!==env.APP_ORIGIN)throw new HttpError(403,'这个来源无法访问账号服务。');
 if(method==='OPTIONS')return new Response(null,{status:204});
 if(!['GET','POST','PUT'].includes(method))throw new HttpError(405,'不支持的请求。');
 if(method!=='GET'&&(origin!==env.APP_ORIGIN||request.headers.get('X-Venti-Request')!=='1'))throw new HttpError(403,'请从游戏页面发起操作。');
 const json=(data:unknown,status=200,headers?:HeadersInit)=>Response.json(data,{status,headers});
 if(path==='/session'&&method==='GET'){const user=await currentUser(request,env);return json({user:user?publicUser(user):null});}
 if((path==='/register'||path==='/login')&&method==='POST'){
  const ip=request.headers.get('CF-Connecting-IP')||'local';
  await rate(env,'auth-ip:'+ip,30,900);
  const data=await body(request);
  const username=typeof data.username==='string'?data.username.trim():'';
  const password=typeof data.password==='string'?data.password:'';
  if(!/^[\p{L}\p{N}_-]{3,24}$/u.test(username))throw new HttpError(400,'用户名需为 3–24 个中文、字母、数字、下划线或短横线。');
  if(password.length<10||password.length>128)throw new HttpError(400,'密码需要 10–128 个字符，可以使用一句好记的话。');
  const normalized=username.normalize('NFKC').toLocaleLowerCase('en-US');
  if(!/^[\p{L}\p{N}_-]{3,24}$/u.test(normalized))throw new HttpError(400,'请使用常见的中文、字母或数字作为用户名。');
  await rate(env,'auth-name:'+normalized,15,900);
  let user:UserRow|null;
  if(path==='/register'){
   await rate(env,'register:'+ip,5,3600);
   const salt=randomBytes(24).toString('hex');
   user={id:crypto.randomUUID(),username:normalized,display_name:username,password_hash:(await derive(password,salt)).toString('hex'),salt};
   const inserted=await env.DB.prepare('INSERT INTO users(id,username,display_name,password_hash,salt,created_at) VALUES(?,?,?,?,?,?) ON CONFLICT(username) DO NOTHING').bind(user.id,user.username,user.display_name,user.password_hash,salt,Date.now()).run();
   if(!inserted.meta.changes)throw new HttpError(409,'这位旅人的名字已有人使用，换一个试试吧。');
  }else{
   user=await env.DB.prepare('SELECT * FROM users WHERE username=?').bind(normalized).first<UserRow>();
   const supplied=await derive(password,user?.salt||'missing-user-salt');
   if(!user||!timingSafeEqual(supplied,Buffer.from(user.password_hash,'hex')))throw new HttpError(401,'用户名或密码不对，再仔细看一眼吧。');
  }
  const token=randomBytes(32).toString('hex');
  await env.DB.prepare('INSERT INTO sessions(token_hash,user_id,expires_at) VALUES(?,?,?)').bind(hash(token),user.id,Date.now()+lifetime*1000).run();
  return json({user:publicUser(user)},path==='/register'?201:200,{'Set-Cookie':cookie(env,token)});
 }
 if(path==='/logout'&&method==='POST'){
  const token=tokenFrom(request,env);
  if(token)await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(hash(token)).run();
  return json({ok:true},200,{'Set-Cookie':cookie(env,'',0)});
 }
 if(path==='/save'){
  const user=await currentUser(request,env);if(!user)throw new HttpError(401,'请重新登录，再继续同步诗页。');
  if(method==='GET'){const row=await env.DB.prepare('SELECT data,revision FROM saves WHERE user_id=?').bind(user.id).first<{data:string;revision:number}>();return json({save:row?JSON.parse(row.data):null,revision:row?.revision||0});}
  if(method==='PUT'){
   await rate(env,'save:'+user.id,120,60);
   const data=await body(request);
   if(!valid(data.save)||!Number.isSafeInteger(data.revision)||data.revision<0)throw new HttpError(400,'存档格式不正确。');
   const stored=JSON.stringify(data.save);let row:{revision:number}|null;
   if(data.revision===0)row=await env.DB.prepare('INSERT INTO saves(user_id,data,revision,updated_at) VALUES(?,?,1,?) ON CONFLICT(user_id) DO NOTHING RETURNING revision').bind(user.id,stored,Date.now()).first();
   else row=await env.DB.prepare('UPDATE saves SET data=?,revision=revision+1,updated_at=? WHERE user_id=? AND revision=? RETURNING revision').bind(stored,Date.now(),user.id,data.revision).first();
   if(!row)throw new HttpError(409,'另一处旅程已经更新了云端存档，请重新载入后再同步。');
   return json(row);
  }
 }
 throw new HttpError(404,'风没有找到这个页面。');
}
export default {
 async fetch(request:Request,env:Env):Promise<Response>{
  let response:Response;
  try{response=await handle(request,env);}catch(error){response=Response.json({error:error instanceof HttpError?error.message:'账号服务暂时休息了，请稍后重试。'},{status:error instanceof HttpError?error.status:503});}
  const headers=new Headers(response.headers);
  if(request.headers.get('Origin')===env.APP_ORIGIN){headers.set('Access-Control-Allow-Origin',env.APP_ORIGIN);headers.set('Access-Control-Allow-Credentials','true');}
  headers.set('Access-Control-Allow-Methods','GET, POST, PUT, OPTIONS');headers.set('Access-Control-Allow-Headers','Content-Type, X-Venti-Request');headers.set('Vary','Origin');headers.set('Cache-Control','no-store');headers.set('X-Content-Type-Options','nosniff');
  return new Response(response.body,{status:response.status,headers});
 },
 async scheduled(_event:ScheduledEvent,env:Env){const now=Date.now();await env.DB.batch([env.DB.prepare('DELETE FROM sessions WHERE expires_at<=?').bind(now),env.DB.prepare('DELETE FROM rate_limits WHERE expires_at<=?').bind(now)]);}
};
