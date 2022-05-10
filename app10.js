const express =require("express");
const { engine } = require("express/lib/application");
const app = express();
const port = 3000;

const homes =require('./routes/route.js');
app.use('/', homes); //미들웨어 등록

app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



// app.listen(port, () => {
//     console.log(`express 실행 ${port}`)
// })

module.exports = app;