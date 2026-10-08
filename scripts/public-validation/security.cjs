'use strict';
const fs=require('node:fs'),path=require('node:path'),root=path.resolve(__dirname,'../..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'PUBLIC_MANIFEST.json'),'utf8'));
const errors=[],patterns=[/gh[pousr]_[A-Za-z0-9]{30,}/,/github_pat_[A-Za-z0-9_]{30,}/,/sk-[A-Za-z0-9_-]{25,}/,/AKIA[A-Z0-9]{16}/,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/[A-Z]:[\\/](?:Users|home)[\\/]/i,/\/(?:home|Users)\/[^\s/]+\//];
for(const f of manifest.files){if(/(?:^|\/)(?:private|internal|commercial|evidence|workbook|customer-build|research-private|master-guide)(?:\/|$)|\.(?:zip|pdf|pem|key)$|(?:^|\/)\.env(?:\.|$)/i.test(f))errors.push('Prohibited public path: '+f);if(!/\.(?:md|cff|json|cjs|yml|svg)$/.test(f)&&f!=='.gitignore'&&f!=='VERSION')continue;const content=fs.readFileSync(path.join(root,f),'utf8');for(const pattern of patterns)if(pattern.test(content))errors.push('Sensitive-looking content requires review in '+f);}
console.log(JSON.stringify({files:manifest.files.length,patternScan:errors.length?'FAIL':'PASS',errors,limits:'Heuristic scan only; public manifest, manual review and GitHub scanning supplement it.'},null,2));if(errors.length)process.exitCode=1;
