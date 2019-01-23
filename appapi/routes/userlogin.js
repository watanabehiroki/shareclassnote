var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');
const connection = mysql.createConnection(sqlconf.mysql);
const randommodule = require('./module/random');

router.post('/clientlogin',function(req,res){
   let userid = req.body.userid;
   let password = req.body.password;
   var responcedata={
       result:'',
       sessionid:'',
       message:''
   };//返却値
    var sql;
   try{
       sql = 'select user.userid, session.endday as sessionday, session.sessionid from clientuser as user' +
           ' left outer join clientapisession as session on session.userid = user.userid where user.userid ="'+userid
           +' "and user.password="'+password+'"and user.delflg = false;';
       connection.query(sql,function(err,rows){
          var sqldata = rows;
          //login判定
          if(sqldata.length > 0){
              var sessionlist;
              var whileflg;
              if(sqldata.sessionid == undefined || sqldata.sessionid == null|| sqldata.sessionid == ''){
                  connection.query('select sessionid from clientapisession;',function(err,rows){
                     if(err){
                     responcedata.result='err';
                     return res.json(responcedata);
                     } else{
                         sessionlist = rows;
                         whileflg = true;

                         while (whileflg) {
                             responcedata.sessionid = 'drthgjhkjl';
                             if(sessionlist.length < 1){
                                 whileflg = false;
                             }else{
                                 for (var i = 0; i < refressionlist.length; i++) {
                                     if (i == sessionlist.length-1 && sessionlist[i].sessionid != responcedata.sessionid) {
                                         whileflg = false;
                                     }
                                 }

                             }
                         }

                         sql = 'insert into clientapisession(userid,endday,sessionid) ' +
                             'values ("'+userid+'",DATE_ADD(now(),INTERVAL 120 DAY),"'+responcedata.sessionid+'");';
                         console.log(sql);
                         connection.query(sql,function (err,rows) {
                             if(!err){
                                 responcedata.result='success';
                                 return res.json(responcedata);
                             }else{
                                 return res.json({
                                     result:'err',
                                     message:'sqlerr'
                                 })
                             }
                         });

                     }
                  });
              }else{
                  //既に一回以上はログインしている場合
                  responcedata.result='success';
                  responcedata.sessionid = sqldata.sessionid;
                  return res.json(responcedata);
              }
          }else{
              //一致しない場合
              responcedata = {
                  result:'success',
                  login:'fail'
              }
              return res.json(responcedata);
          }
       });
   }catch (e){
       return res.json({
           result:'err',
           message:undefined
       });
   }
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

            return res.json(resultdata);
        });
    }catch(e){
        resultdata = {
            result:'err',
            message:'tryerr'
        }

        return res.json(resultdata);
    }
});

module.exports = router;
