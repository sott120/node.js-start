const express = require('express')
//익스프레스 기본 모듈을 불러오는 것.
const server = express()
//익스프레스 객체 생성. 객체화 시킴.
const port = 3000


server.get('/', (req, res, next) => { //'/'기본
  console.log('첫번째 미들웨어')
  res.redirect('https://www.npmjs.com/package/express') //redirect - 페이지를 url로 이동해줌
})

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
}) //외우기