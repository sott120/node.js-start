const express =require("express");
const app = express();
const port = 3000;


// const mySub1 = `

// `;

// const mySub2 = `

// `;


//route, routing 파일과 경로를 지정
app.get("/", (req,res) => {
var list = '';
for(var i = 0; i < 5; i++){
    list = list + "<li>nav</li>";
};


const myIndex =`
<!DOCTYPE html>
<html>
    <head>
        <title>index</title>
    </head>
    <body>
        <h1>index page</h1>
        <ul>
            ${list}
        </ul>
    </body>
</html>
`;

    res.send(myIndex); 
})

app.get("/sub1", (req,res) => {
    res.send("sub1"); 
})

app.get("/sub2", (req,res) => {
    res.send("sub2"); 
})


app.listen(port, () => {
    console.log(`express 실행 ${port}`)
})