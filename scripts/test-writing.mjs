// Run after bundling course.ts to /tmp/venti-course.mjs with esbuild.
import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import {letters} from '/tmp/venti-course.mjs';
const solutions={
 hello:['print("你好，蒙德！")','print("别的问候")'],
 naming:['wind_poem = "风与诗"','wind_poem = 3'],
 inventory:['bag = ["苹果", "羽毛", "乐谱"]','bag = {"苹果", "羽毛", "乐谱"}'],
 separator:['print("风", "诗", sep="·")','print("风·诗")'],
 'fix-poem':['print("风与诗")',`print("风与诗')`],
 indent:['def greet(name):\n    return "你好，" + name','def greet(name):\n    return "你好，温迪"'],
 return:['def song():\n    return "风"','def song():\n    print("风")'],
 casting:['print(int("3") + 2)','print(5)'],
 final:['def tomorrow(count):\n    return int(count) + 1\n\nprint(tomorrow("4"))','def tomorrow(count):\n    return 5\n\nprint(tomorrow("4"))']
};
const runner=`import json,sys,io,contextlib\npayload=json.load(sys.stdin)\nscope={}\nstream=io.StringIO()\ntry:\n with contextlib.redirect_stdout(stream):\n  exec(payload['code'],scope)\n scope['__output']=stream.getvalue()\n scope['__source']=payload['code']\n exec(payload['test'],scope)\n print('PASS')\nexcept Exception as e:\n print(type(e).__name__)\n`;
const code=letters.flatMap(l=>l.challenges).filter(c=>c.kind==='code');assert.equal(code.length,9);assert.equal(code.filter(c=>c.code==='').length,7);
for(const c of code){assert.ok(solutions[c.id],c.id);for(const [index,source] of solutions[c.id].entries()){const result=spawnSync('python3',['-c',runner],{input:JSON.stringify({code:source,test:c.test}),encoding:'utf8'});assert.equal(result.status,0,result.stderr);assert.equal(result.stdout.trim()==='PASS',index===0,`${c.id}: ${result.stdout}`);}}
console.log('PASS: 9 writing exercises accept working code and reject syntax errors, incorrect types, hardcoded examples, print/return confusion, and shortcuts that skip the taught operation. Seven start from a blank editor.');
