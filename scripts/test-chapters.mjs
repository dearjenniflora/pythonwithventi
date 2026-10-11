import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {letters,chapters} from '/tmp/venti-course.mjs';
import {lessons,moments} from '/tmp/venti-learning.mjs';
import {valid,initial} from '/tmp/venti-save.mjs';
import {PYTHON_CHECKS} from '../public/python-checks.js';
const solutions=JSON.parse(readFileSync(new URL('./fixtures/chapter-solutions.json',import.meta.url)));
const all=letters.flatMap(l=>l.challenges),extra=all.filter(c=>/^l[345]-/.test(c.id));
assert.equal(new Set(all.map(c=>c.id)).size,all.length);assert.equal(all.length,105);assert.equal(extra.length,87);assert.equal(moments.length,letters.length);
assert.deepEqual(chapters.map(ch=>letters.filter(l=>l.chapter===ch.level).length),[6,10,8,11]);
for(const l of letters){assert.equal(l.challenges.length,3);assert.ok(moments[letters.indexOf(l)].choices.length===2);for(const c of l.challenges){assert.ok(lessons[c.id],c.id);assert.ok(c.hint&&c.source&&lessons[c.id].task);if(c.kind==='choice')assert.ok(c.options.includes(c.answer),c.id);}}
const runner=`import json,sys,io,contextlib\np=json.load(sys.stdin)\nscope={}\nstream=io.StringIO()\ntry:\n with contextlib.redirect_stdout(stream): exec(p['code'],scope)\n scope['__output']=stream.getvalue()\n scope['__source']=p['code']\n if p.get('test'):\n  exec(p['checks'],scope)\n  exec(p['test'],scope)\n print(json.dumps({'ok':True,'output':stream.getvalue()},ensure_ascii=False))\nexcept Exception as e:\n print(json.dumps({'ok':False,'error':type(e).__name__,'message':str(e)},ensure_ascii=False))\n`;
function run(code,test){const r=spawnSync('python3',['-c',runner],{input:JSON.stringify({code,test,checks:PYTHON_CHECKS}),encoding:'utf8',timeout:5000});assert.equal(r.status,0,r.stderr||'timed out');return JSON.parse(r.stdout);}
let checked=0;
for(const c of extra){const lesson=lessons[c.id];for(const step of lesson.steps){const r=run(step.code);assert.equal(r.ok?r.output.trimEnd():r.error,step.result=== '执行完成，无输出'?'':step.result,`${c.id} demonstration`);}if(c.kind==='output'){assert.equal(run(c.code).output.trim(),c.answer.trim(),c.id);}if(c.kind==='code'){assert.ok(solutions[c.id],c.id);const good=run(solutions[c.id],c.test);assert.equal(good.ok,true,`${c.id}: ${good.message}`);assert.equal(run('pass',c.test).ok,false,`${c.id} rejects empty code`);checked++;}}
// Representative misconceptions: boundaries, equality, early return, overlap, state resets.
const wrong={
'l3-even':'def evenOrOdd(n):\n    if n > 0 and n % 2 == 0:\n        return "even"\n    return "odd"',
'l3-greatest':'def greatest(x,y,z):\n    if x>y and x>z:\n        return x\n    elif y>x and y>z:\n        return y\n    return z',
'l4-factorial-for':'def factorial(n):\n    result=0\n    for i in range(1,n+1):\n        result *= i\n    return result',
'l4-sum':'def sum_numbers(numbers):\n    for n in numbers:\n        total = 0\n        total += n\n    return total',
'l4-even-sum':'def sumEvenNumbers(start,end):\n    total=0\n    for n in range(start,end):\n        if n%2==0:\n            total+=n\n    return total',
'l5-overlap':'def count_pairs(s):\n    for i in range(len(s)):\n        part=s[i:i+2]\n    return s.count("ll")',
'l5-valid-name':'import keyword\ndef validVariable(name):\n    for c in name:\n        if c.isalpha() or c.isdigit():\n            pass\n    return not keyword.iskeyword(name)',
'l5-vowels':'def countVowels(inputString):\n    n=0\n    for ch in inputString.lower():\n        if ch in "aeiou":\n            n+=1\n            return n\n    return 0'
};
for(const [id,code] of Object.entries(wrong))assert.equal(run(code,all.find(c=>c.id===id).test).ok,false,id);
assert.ok(valid({...initial,done:['hello'],written:['hello'],moments:{first:0},cursor:{letter:5,step:2,stage:'challenge'}}),'legacy save');
const newSave={...initial,done:all.map(c=>c.id),written:all.filter(c=>c.kind==='code').map(c=>c.id),moments:Object.fromEntries(letters.map(l=>[l.id,1])),cursor:{letter:34,step:2,stage:'challenge'}};
assert.ok(valid(newSave));assert.ok(!valid({...newSave,cursor:{...newSave.cursor,letter:35}}));
console.log(`PASS: 105 unique concept/lesson pairs, 35 letters, 87 new demonstrations, all output answers, ${checked} new writing tasks, incorrect-code rejection, 8 misconception cases, legacy and expanded saves.`);
