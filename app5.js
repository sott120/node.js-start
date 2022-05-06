const express = require('express')
//익스프레스 기본 모듈을 불러오는 것.
const server = express()
//익스프레스 객체 생성. 객체화 시킴.
const port = 3000

server.get('/', (req, res) => { //'/'기본
  res.send('헬로월드!') //한번만 가능 두번째부터는 출력안됨
  //res.write는 여러번 사용할 수 있지만 res.send는 한번만 가능하다
})

server.listen(port, () => {
  console.log(`Example server listening on port ${port}`)
})