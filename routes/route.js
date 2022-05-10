const express =require("express");
const router = express.Router();


//route, routing 파일과 경로를 지정
router.get("/", (req,res) => {
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
    
    router.get("/sub1", (req,res) => {
        res.render("sub1.html"); 
    })
    
    router.get("/sub2", (req,res) => {
        res.render("sub2"); 
    })
    


    module.exports = router;