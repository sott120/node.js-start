const express = require("express");
const server = express()
const port = 3000;


const desc= `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
    </head>
    <body> 
        <h1>페이지 제작하기</h1>
        <h2>express를 이용하여 서버 실행하기</h2>
        <ul>
            <li>express 시작하는 방법은?</li>
            <li>변수를 선언하는 방법은?</li>
            <li>변수를 부르는 방법은?</li>
            <li>기본포트를 객체에 속성으로 설정하는 방법은?</li>
            <li>서버를 실행하는 방법은?</li>
        </ul>
    </body>
</html>
`


server.get("/",(req,res) => {
    res.send(desc)
})

server.listen(port, () => {
    console.log(`Example server listening on port ${port}`)
})