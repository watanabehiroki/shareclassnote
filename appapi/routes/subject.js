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
                    result:'err',
                    err:'conectionerr'
                };
            } else {
                result = rows;
            }
            return res.json(result);
        });
    }catch (e){
        result= {
            result:'err'
        }
        return res.json(result);
    }
});



/*各教科の登録を行う*/
router.post('/addsubject',function(req,res){
    var result = "";
    var name = req.body.name;
    console.log(name);
    var updateday = new Date();
    var color = req.body.color;
    var result = "";
    var sql;
    try{

        var sql = 'insert into subject(name,color,updateday)'
            +' values ("'+name+'","'+color+'",now());';
        connection.query(sql,function(err,rows){
            if(err){
                result = {
                    result: 'err',
                    err:'connectionerr',
                    message: err
                }
            }else{
                result = {
                    result:'success',
                    message:'OK Regist'
                };
            }
            return res.json(result);
        })
    }catch (e){
        result={
            result: 'err',
            message:"err"
        }
        return res.json(result);
    }
});

module.exports=router;
