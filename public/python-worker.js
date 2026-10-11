import {loadPyodide} from "/python/pyodide.mjs";
let python;
self.onmessage = async ({data}) => {
 try {
  if(!python){try{python=await loadPyodide({indexURL:'/python/'});}catch(e){self.postMessage({type:'failure',output:'Python 环境载入失败：'+String(e)});return;}}
  self.postMessage({type:'ready'});
  let output='';
  python.setStdout({batched:s=>output= (output+s+'\n').slice(0,12000)});
  python.setStderr({batched:s=>output= (output+s+'\n').slice(0,12000)});
  const scope=python.toPy({});
  try{
   await python.runPythonAsync(data.code,{globals:scope});
   scope.set('__output',output);
   scope.set('__source',data.code);
   if(data.test) await python.runPythonAsync(data.test,{globals:scope});
   self.postMessage({type:'result',ok:true,output});
  }finally{scope.destroy();}
 }catch(e){const full=String(e);const pos=full.lastIndexOf('  File "<exec>"');const result=pos>=0?full.slice(pos):full.split('\n').slice(-4).join('\n');self.postMessage({type:'result',ok:false,output:result});}
};
