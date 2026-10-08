'use strict';
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'PUBLIC_MANIFEST.json'),'utf8'));
const base='https://github.com/Ciprian-LocalPulse/cognitive-os',urls=new Set();for(const f of manifest.files.filter(x=>x.endsWith('.md'))){const s=fs.readFileSync(path.join(root,f),'utf8');for(const [,url] of s.matchAll(/\[[^\]]*\]\((https?:\/\/[^)]+)\)/g))urls.add(url);}
(async()=>{const errors=[],results=[];for(const url of urls){
 if(url.startsWith(base+'/blob/main/')){const target=url.slice((base+'/blob/main/').length).split('#')[0];const ok=manifest.files.includes(target)&&fs.existsSync(path.join(root,target));results.push({url,validation:'canonical repository link maps to checked-out source',pass:ok});if(!ok)errors.push(url+' → absent source');continue;}
 if(url.startsWith(base+'/wiki/')){const page=url.slice((base+'/wiki/').length).split('#')[0];if(!manifest.files.includes('wiki-export/'+page+'.md')){errors.push(url+' → absent canonical Wiki source');continue;}}
 try{let r=await fetch(url,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(15000)});if(!r.ok)r=await fetch(url,{method:'GET',redirect:'follow',signal:AbortSignal.timeout(15000)});const wikiRedirect=url.startsWith(base+'/wiki/')&&!r.url.startsWith(base+'/wiki/');results.push({url,status:r.status,finalUrl:r.url,pass:r.ok&&!wikiRedirect});if(!r.ok||wikiRedirect)errors.push(url+' → '+(wikiRedirect?'Wiki page is not published; redirect to repository':r.status));}catch(e){errors.push(url+' → '+e.message);}
 }console.log(JSON.stringify({results,errors,scope:'Canonical main-repository links resolve against this checkout; Wiki pages and other external URLs require live availability without a misleading Wiki redirect.'},null,2));if(errors.length)process.exitCode=1;
})();
