var express = require('express');
var router = express.Router();
let mysql = require('mysql');
let sqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(sqlconf.mysql);
let uniquvalue = require('./module/uniquvalue');
router.post('/clientlogin',function(req,res){
   let userid = req.body.userid;
   let password = req.body.password;
   var responcedata={
       result:'',
       sessionid:'',
       message:'',
       login:''
   };//返却値
    var sql;
   try{
       sql = 'select user.userid, session.endday , session.sessionid from clientuser as user' +
           ' left outer join clientapisession as session on session.userid = user.userid where user.userid ="'+userid
           +' "and user.password="'+password+'"and user.delflg = false;';
       connection.query(sql,function(err,rows){
          var sqldata = rows;
          //login判定

          if(sqldata !== undefined){
              responcedata.login = 'success';
              var sessionlist;
               if(sqldata[0].sessionid == undefined || sqldata[0].sessionid == null|| sqldata[0].sessionid == ''){
                  connection.query('select sessionid from clientapisession;',function(err,rows){

                     if(err){
                     responcedata.result='err';
                     return res.json(responcedata);
                     } else{
                         sessionlist = rows;
                         responcedata.sessionid = uniquvalue.findsessionid(sessionlist);

                         sql = 'insert into clientapisession(userid,endday,sessionid) ' +
                             'values ("'+userid+'",DATE_ADD(now(),INTERVAL 120 DAY),"'+responcedata.sessionid+'");';
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
                  responcedata.sessionid = sqldata[0].sessionid;
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
    var sqlrespodata;
    var sql;
    try{
        sql = 'select user.email, session.sessionid, session.endday from adminuser as user left outer join '+
            'adminapisession as session on user.email = ' +
            'session.email where user.email = "'+email+'" and password="'+password+'";';
        connection.query(sql,function(err,rows){
           if(err){
               resultdata = {
                   result: 'err',
                   message: 'queryerr',
               }
           } else{
               sqlrespodata = rows;
               if(sqlrespodata[0].email === undefined ){
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
                       sessionid:'',
                   }

                   if( sqlrespodata[0].sessionid !== null ){
                       resultdata.sessionid = sqlrespodata[0].sessionid;
                   } else {
                       resultdata.sessionid = uniquvalue.findsessionid(sqlrespodata);
                       console.log(resultdata.sessionid);
                       sql = 'insert into adminapisession(email,endday,sessionid)' +
                           ' values("' + sqlrespodata[0].email + '",DATE_ADD(now(),INTERVAL 120 DAY),"'+ resultdata.sessionid + '");';
                       console.log(sql);
                       connection.query(sql,function (err,rows) {
                           if(err){
                               resultdata={
                                   result:'err',
                                   login:'err',
                                   sessionid:'',
                               }
                           }
                       });
                   }
               }
               return res.json(resultdata);
           }
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
