const express = require('express')
//익스프레스 기본 모듈을 불러오는 것.
const server = express()
//익스프레스 객체 생성. 객체화 시킴.
const port = 3000


//html 문서를 변수로 선언하여 미들웨어로 출력하는 방법
const desc = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <h1>GET으로 요청하여 보기!</h1>
        <form method="get" action="./login">
            <!-- 겟으로 되어있으면 주소창에 값이 다 보인다.로그인 비추 -->
            <label>ID : </label>
            <input type="text" name="id" placeholder="아이디 입력" />
            <label>PW : </label>
            <input type="password" name="pw" placeholder="비밀번호 입력" />
            <input type="submit" name="submit" value="확인" />
        </form>
    </body>
</html>        
`

server.get('/', (req, res) => { //'/'기본
  res.send(desc)
})

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})