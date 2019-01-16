var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');

const connection = mysql.createConnection(sqlconf.mysql);
/*GET*/
/*登録されている教科を返却する*/
router.get('/getallsubject',function(req,res){
    //var id = res.request.id;
    var result ;
    var sql= "select * from subject;";
    if(false){
        //ここではsessionidの判定を行う予定
    }
    try {
        connection.query(sql, function (err, rows, fields) {

            if (err) {
                result = {
                    err:'conectionerr'
                };
            } else {
                result = rows;
            }
            return res.json(result);
        });
    }catch (e){
        result= {
            err:true
        }
        return res.json(result);
    }
});



/*各教科の登録を行う*/
router.post('/addsubject',function(req,res){
    var result = "";
    var name = res.body.name;
    var updateday = res.body.updateday;
    var color = res.body.color;
    var result = "";
    var sql = "insert into subject(name,color,updateday) values ("+name+","+color+","+updateday+")";
    try{
        connection.query(sql,function(err,rows){
            if(err){
                result = {
                    err:'connectionerr'
                }
            }else{
                result = rows;
            }
            return res.json(result);
        })
    }catch (e){
        result={
            err: 'err',
            message:"err"
        }
        return res.json(result);
    }
});

module.exports=router;
