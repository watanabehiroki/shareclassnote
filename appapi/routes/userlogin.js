var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');
const connection = mysql.createConnection(sqlconf);

router.post('/clientlogin',function(req,res){
    let userid = req.body.userid;
    let password = req.body.password;
    var responcedata;
    var sql = "select * from clientuser left outer join " +
        "clientapisession on clientuser.userid = clientapisession.userid where " +
        "clientuser.userid = "+userid+";";
    try {
        var sqldata;
        connection.query(sql, function (err, rows) {
            if(err){
                responcedata = {
                    result: 'err',
                    message: 'sqlerr'
                }
            } else {
                sqldata = rows;
                if(sqldata.length < 0){
                    responcedata = {
                        result:'success',
                        login:'fail'
                    }
                }else{
                    responcedata ={

                        result:'success',
                        login:'success',
                        logindata:sqldata[0]
                    }
                }
            }

        });
    }catch(e){
        responcedata = {
            result:'err',
            message:'tryerr'
        }
    }
    return res.json(responcedata);
});
router.post('/adminlogin',function(req,res){
    let email = req.body.email;
    let password = req.body.password;
    var resultdata;
    try{
        var sql = 'select * from adminuser left outer join '+
            'adminapisession on adminuser.userid = ' +
            'admonapisession.userid where adminuser.mail = "'+email+'";';
        connection.query(sql,function(err,rows){
            var sqldata;
           if(err){
               resultdata = {
                   result: 'err',
                   message: 'queryerr',
               }
           } else{
               sqldata = rows;
               if(sqldata.length <0){
                   //ログイン失敗
                   resultdata={
                       result:'success',
                       login: 'fail'
                   }
               }else{
                   //ログイン成功
                   resultdata = {
                       result:'success',
                       login:'success',
                       logindata:sqldata[0]
                   }
               }
           }
        });
    }catch(e){
        resultdata = {
            result:'err',
            message:'tryerr'
        }
    }
    return res.json(resultdata);
});

module.exports = router;
