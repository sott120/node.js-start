const express =require("express");
const router = express.Router();


//route, routing 파일과 경로를 지정
router.get("/", (req,res) => {
    res.render('index.html');
    //서문시장야시장 메인페이지 지정
    });
    
    
    router.get("/intro", (req,res) => { //html 문서 a태그 링크 이름과 일치하게
        res.render("intro.html");  //html 파일명과 일치하게
    })
    
    router.get("/main", (req,res) => {
        res.render("index.html"); 
    })
    
    router.get("/food", (req,res) => {
        res.render("thum.html"); 
    })

    router.get("/notice", (req,res) => {
        res.render("notice.html"); 
    })

    router.get("/login", (req,res) => {
        res.render("login.html"); 
    })

    router.get("/view", (req,res) => {
        res.render("notice_view.html"); 
    })

    router.get("/write", (req,res) => {
        res.render("notice_write.html"); 
    })

    router.get("/join", (req,res) => {
        res.render("join.html");
    })

    module.exports = router;