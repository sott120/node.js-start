const express = require('express');
const app = express();
const port = 3000;


app.use((req,res) => {
    console.log('미들웨어실행');
var userAgent =req.header('User-Agent');
var userHost =req.header('Host');
var paName =req.query.name;    
var paId =req.query.id;    
var paPw =req.query.pw;    

var servers = `
<!DOCTYPE html>
<html>
<head>
<title>document</title>
</head>
<body>
<h1>서버에서 응답 받아 넣기</h1>
<h2>network에서 확인하기</h2>
<div>userAgent : ${userAgent}</div>
<div>userHost : ${userHost}</div>
<div>paName : ${paName}</div>
<div>paId : ${paId}</div>
<div>paPw : ${paPw}</div>
</body>
</html>
`


res.send(servers);
// res.writeHead('200',{'content-Type' : 'text/html; charset=utf-8'});
// res.write('<h1>서버에서 응답 받아 넣기</h1>')
// res.write('<h2>network에서 확인하기</h2>')
// res.write(`<div>userAgent : ${userAgent}</div>`)
// res.write(`<div>userHost : ${userHost}</div>`)
// res.write(`<div>paName : ${paName}</div>`)
// res.write(`<div>paId : ${paId}</div>`)
// res.write(`<div>paPw : ${paPw}</div>`)
// res.end();


})


app.listen(port, () => {
    console.log(`express 실행 ${port}`)
})