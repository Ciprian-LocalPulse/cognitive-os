'use strict';
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'PUBLIC_MANIFEST.json'),'utf8'));
const urls=new Set();for(const f of manifest.files.filter(x=>x.endsWith('.md'))){const s=fs.readFileSync(path.join(root,f),'utf8');for(const [,url] of s.matchAll(/\[[^\]]*\]\((https?:\/\/[^)]+)\)/g))urls.add(url);}
(async()=>{const errors=[],results=[];for(const url of urls){try{let r=await fetch(url,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(15000)});if(!r.ok)r=await fetch(url,{method:'GET',redirect:'follow',signal:AbortSignal.timeout(15000)});results.push({url,status:r.status,finalUrl:r.url});if(!r.ok)errors.push(url+' → '+r.status);}catch(e){errors.push(url+' → '+e.message);}}console.log(JSON.stringify({results,errors},null,2));if(errors.length)process.exitCode=1;})();
