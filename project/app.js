const express =require("express");
const { engine } = require("express/lib/application");
const app = express();
const port = 3000;

const homes =require('./routes/route.js');
app.use('/', homes); //미들웨어 등록

app.set('views', __dirname + "/views");//html파일을 위한 경로설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static(__dirname + '/public'));//css img js파일 사용을 위한 경로 설정
//??어떻게 가능하지? html 파일 안에 링크경로 수정 없이 가능한 이유가 뭘까...
module.exports = app;