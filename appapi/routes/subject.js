var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');
const connection = mysql.createConnection(sqlconf.mysql);


/*GET*/
//１教科を返す
router.get('/findsubject',function(req,res){
    var id= req.query.subjectid;
    var sql = "select * from subject where id = "+id+";";
    var result;
    try{
        connection.query(sql,function(err,rows){
            if(err){
                result ={
                    result: 'err',
                    message: err
                }
            }else{
                result = rows;
            }
            return res.json(result);
        });
    }catch(e){
        result = {
            result: "err",
            message: e
        }

        return res.json(result);
    }
});

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


/*POST*/
/*更新を行う*/
router.post('/updatesubject',function (req,res) {
   var name = req.body.subjectname;
   var color = req.body.subjectcolor;
   var id = req.body.subject.id;
   var sql;
   var result;
   try{
       sql = "update subject set  name = "+ name+", color ="+ color +
           ", updateday = now() where id = "+id+";";
       connection.query(sql,function(errrows){
           if(err){
               result = {
                   result:'err',
                   message: err
               }
           }else{
               result = {
                   result:'success',
                   messsege:'update'
               }
           }
           return res.json(result);
       });
   }catch (e){
       result ={
           result: 'err',
           message: e
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
