const express =require("express");
var expressLayouts = require('express-ejs-layouts');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.use(expressLayouts);
//route, routing 파일과 경로를 지정
router.get("/", (req,res) => {
    res.render('index');
    //서문시장야시장 메인페이지 지정
    });
    
    const db = require('./../db.js');

    
    router.post('/notice_send',[check('content').isByteLength({ min: 1, max: 5000 })], //그냥 islength도 가능
        function (req, res, next) {
            let errs = validationResult(req);
            console.log(errs); //콘솔 에러 출력하기
            if (errs['errors'].length > 0) {
                //화면에 에러 출력하기
                res.render('notice_write', { errs:errs['errors'] });
            } else {
                let param = JSON.parse(JSON.stringify(req.body));
                db.insertMemo(param['title'], param['name'], param['pw'], param['content'], () => {
                    res.redirect('/notice');
                });
            }
        }
    );

    router.get('/notice_update', (req, res) => {
        let id = req.query.id;
        db.getMemoById(id, (row) => {
            if (typeof id === 'undefined' || row.length <= 0) {
                res.status(404).json({ error: 'undefined memo' });
            } else {
                res.render('notice_update', { row:row[0] });
            }
        });
    });
    
    router.post('/notice_update', [check('content').isByteLength({ min: 1, max: 5000 })], (req, res) => {
        let errs = validationResult(req);
        let param = JSON.parse(JSON.stringify(req.body));
        let id = param['id'];
        let name = param['name'];
        let pw = param['pw'];
        let title = param['title'];
        let content = param['content'];
        if (errs['errors'].length > 0) {
            db.getMemoById(id, (row) => {
                res.render('notice_update', { row: row[0], errs: errs['errors'] });
            });
        } else {
            db.updateMemoById(id, content, name, pw, title, () => {
                res.redirect('/notice');
            });
        }
    });
    
    router.get('/deleteMemo', (req, res) => {
        let id = req.query.id;
        db.deleteMemoById(id, () => {
            res.redirect('/notice');
        });
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
        //res.render("notice"); 
        db.getAllMemos((rows) => {
            res.render('notice', { rows: rows });
        });
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

    router.get("/update", (req,res) => {
        res.render("notice_update");
    })

    module.exports = router;