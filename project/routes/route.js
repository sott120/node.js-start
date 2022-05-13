const express =require("express");
var expressLayouts = require('express-ejs-layouts');
const router = express.Router();

router.use(expressLayouts);
//route, routing 파일과 경로를 지정
router.get("/", (req,res) => {
    res.render('index');
    //서문시장야시장 메인페이지 지정
    });
    
    
    router.get("/intro", (req,res) => { //html 문서 a태그 링크 이름과 일치하게
        res.render("intro");  //html 파일명과 일치하게
    })
    
    router.get("/main", (req,res) => {
        res.render("index"); 
    })
    
    router.get("/food", (req,res) => {
        res.render("thum"); 
    })

    router.get("/notice", (req,res) => {
        res.render("notice"); 
    })

    router.get("/login", (req,res) => {
        res.render("login"); 
    })

    router.get("/view", (req,res) => {
        res.render("notice_view"); 
    })

    router.get("/write", (req,res) => {
        res.render("notice_write"); 
    })

    router.get("/join", (req,res) => {
        res.render("join");
    })

    module.exports = router;