'use strict';
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'PUBLIC_MANIFEST.json'),'utf8'));
const errors=[];let localLinks=0,diagrams=0;
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name==='.git'?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.relative(root,path.join(dir,e.name)).replaceAll('\\','/')]);}
const files=walk(root),allowed=new Set(manifest.files);
for(const f of files)if(!allowed.has(f))errors.push('File outside public manifest: '+f);
for(const f of allowed)if(!files.includes(f))errors.push('Missing manifest file: '+f);
for(const f of files){if(!f.endsWith('.md'))continue;const s=fs.readFileSync(path.join(root,f),'utf8');if(!/^# /m.test(s))errors.push('Missing page title: '+f);if((s.match(/^```/gm)||[]).length%2)errors.push('Unbalanced fenced code: '+f);if(/[ \t]+$/m.test(s))errors.push('Trailing whitespace: '+f);
 const targets=[...s.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)].map(x=>x[1]);for(const x of s.matchAll(/<img[^>]+src="([^"]+)"/g))targets.push(x[1]);
 for(const target of targets){if(/^https?:/.test(target)||target.startsWith('#'))continue;const full=path.resolve(path.dirname(path.join(root,f)),target.split('#')[0]);localLinks++;if(!full.startsWith(root+path.sep)||!fs.existsSync(full))errors.push('Invalid local reference: '+f+' → '+target);}
 for(const [,diagram] of s.matchAll(/```mermaid\n([\s\S]*?)```/g)){diagrams++;if(!/^flowchart (?:LR|TB)\n/.test(diagram))errors.push('Unsupported diagram format: '+f);if((diagram.match(/\[/g)||[]).length!==(diagram.match(/\]/g)||[]).length)errors.push('Unbalanced diagram nodes: '+f);if((diagram.match(/^\s*subgraph /gm)||[]).length!==(diagram.match(/^\s*end\s*$/gm)||[]).length)errors.push('Unbalanced subgraph: '+f);}
}
for(const f of files.filter(x=>x.endsWith('.png'))){const data=fs.readFileSync(path.join(root,f));if(data.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')errors.push('Invalid PNG: '+f);const width=data.readUInt32BE(16),height=data.readUInt32BE(20);if(!width||!height)errors.push('Invalid image dimensions: '+f);}
const upload=fs.readFileSync(path.join(root,'assets/branding/cognitive-os-social-preview-upload.jpg'));if(upload.length>=1024*1024||upload.subarray(0,2).toString('hex')!=='ffd8')errors.push('Invalid or oversized social-preview upload derivative.');
console.log(JSON.stringify({files:files.length,localLinks,diagrams,errors,scope:'Structural checks; rendered Mermaid and scientific correctness require review.'},null,2));if(errors.length)process.exitCode=1;
