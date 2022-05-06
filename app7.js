const express = require('express')
//익스프레스 기본 모듈을 불러오는 것.
const server = express()
//익스프레스 객체 생성. 객체화 시킴.
const port = 3000

//두개의 미들웨어를 만들어서 첫번째 미들웨어에서 두번째로 넘겨주는 방식
server.get('/', (req, res, next) => { //'/'기본
    console.log('첫번째 미들웨어')
    req.myName = '소연';
    next(); //두번째로 넘겨줌
})

server.get('/', (req, res, next) => { //'/'기본
  console.log('두번째 미들웨어')
  res.send(`<h2>첫번째 미들웨어에서 받은 "${req.myName}"으로 응답</h2>`) 
})

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
}) //외우기