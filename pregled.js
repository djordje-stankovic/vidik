/* mali statični server samo za pregled sajta lokalno: node pregled.js */
const http=require('http'),fs=require('fs'),path=require('path');
const tipovi={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]);
  if(p==='/')p='/index.html';
  const f=path.join(__dirname,p);
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404);return res.end('nema');}
    res.writeHead(200,{'Content-Type':tipovi[path.extname(f)]||'application/octet-stream'});
    res.end(d);
  });
}).listen(8090,()=>console.log('pregled: http://localhost:8090'));
