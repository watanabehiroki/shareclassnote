var express = require('express');
var router = express.Router();
var connectsql = require('./module/connectsql');

/*GET*/
/*登録されている教科を返却する*/
router.get('/getsubject',function(req,res){
    var id = res.request.id;
    var result = "";
    var sql= "select * from subject left outer join subjectcolor on subject.id = subjectcolor.subjectid;";
    if(false){
        //ここではsessionidの判定を行う予定
    }
    result = connectsql.connectsql(sql);
    return res.json(result);
});

/*各教科の登録を行う*/
router.post('newsubject',function(req,res){
    var result = "";
    var id = res.body.userid
    var subject = res.body.subject;
    var color = res.body.color;
    if(false){
        //ここではsessionidからuseridを求める処理を行う.

    }
    if(){
       //session処理後に組み込む

    }
});

module.exports=router;
