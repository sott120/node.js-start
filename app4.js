var http = require('http');
var fs = require("fs");
// 파일시스템. 파일을 불러오겠다는 요청


var port = 3000;


var server =http.createServer(function(req, res){
    if(req.method == "GET"){
        fs.readFile("./login_get.html", function(error, data){
            res.writeHead(200,{"content-Type" : "text/html ; charset= utf-8"});
            // res.write("서버 시작했습니다");
            res.end(data);
        })
    } else if(req.method == "POST") {
        // 포스트는 보안장치로 감싸서 보내준다. 캡슐화
        req.on("data", function(chunk){
            console.log(chunk.toString());
            var data = new URLSearchParams(chunk.toString());
            res.writeHead(200,{"content-Type" : "text/html ; charset= utf-8"});
            res.end(`id : ${data.id} pw : ${data.pw}`);
        })
    } else {
        console.log(error);
    }
});

server.listen(port, function(){
    console.log("서버시작!");
});