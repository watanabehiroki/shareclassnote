var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');
const connection = mysql.createConnection(sqlconf.mysql);

/*GET only*/
/*router.get('/gethashkey',function(req,res) {
    var requserid = req.body.id;
    if(){

    }
});*/
/*POST*/
/*ログイン認証 client*/
router.post('/logincertifi',function(req,res){
    var result = "";
    var userid = req.body.userid;
    var password = req.body.password;
    var sql="select * from clientuser left outer join clientapisession" +
        " on clientuser.userid = clientapisession.userid " +
        "where clientuser.userid = "+userid +" and clientuser.password = " + password + ";";

    try{
        connection.query(sql,function(err,rows){
           if(err){

           } else {

           }
           console.log(rows);

        });
    }catch (e){

    }

    return res.json();
});
/*ログイン認証 admin*/
router.post('/admin/logincertifi',function(req,res){
   var result = "";
   var userid = req.body.userid;
   var password= req.body.password;
   return res.json({null});
});

/*POST only*/
module.export=router;
