let express = require('express');
var router = express.Router();
let mysql = require('mysql');
let mysqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(mysqlconf.mysql);
//作成したすべてのグループを取り出す
router.get('/getallgrouplist',function (req,res) {
   let sessionid = req.query.sessionid;
   let adminemail ;
   var result={
       result:'',
       message:''
   };
   var sql ;
   try{
       var sqldata;
       //sessionid認証
       sql = 'select email,endday from adminapisession ' +
           'where sessionid = "'+sessionid+'";';
       connection.query(sql,function(err,rows){
           sqldata = rows;
           if(err){
               result = {
                   result:'err',
                   message:''
               }

               return res.json(result);
           }else{
               if(sqldata == null || sqldata == undefined){
                  //sessionidが存在しない場合
                   result = {
                       result:'err',
                       message: 'sessionerr'
                   }
                   return res.json(result);
               }else{
                   adminemail = sqldata[0].email;
                   sql = 'select * from grouptable ' +
                       'where adminemail = "'+adminemail+'";';
                   connection.query(sql,function (err,rows) {
                       sqldata = rows;
                       if(err){
                           result = {
                               result:'err',
                               message:'sqlerr'
                           }
                       }else{
                           result = {
                               result: 'success',
                               datas: sqldata
                           }
                       }
                       return res.json(result);
                   });
               }
           }
       });
   }catch(e){
       return res.json({
           result:'err' 
       })
   }
});
//選択された自身のグループのパスフレーズを取得する
router.get('/getgrouphrase', function(req,res){
   let sessionid = req.query.sessionid;
   let adminemail ;//= req.query.adminemail;
   let groupname = req.query.groupname;
   var sql;
   var result ;
   try {
       var sqldata;
       sql = 'select email,sessionid from adminapisession' +
           ' where sessionid = "'+sessionid+'"';
       //sessionid認証
       connection.query('sql', function (err,rows) {
           sqldata = rows ;
           if(sqldata.length < 1 ){
           }else{
               adminemail = sqldata[0].email;
               sql = 'select  qcode, endday from grouptable  ' +
                   'where adminemail="'+adminemail+'" and groupname="'+groupname+'";';
               //pherese検索
               connection.query(sql,function (err,rows) {
                   if(err){
                       result ={
                           result:err,
                       }
                   }else {
                       sqldata =rows;
                       result = {
                           result: 'success',
                           passphrase: sqldata[0].qcode
                       }
                   }
               });
           }
           return res.json(result);
       });
   }catch (e){
       return res.json({
           result: 'err'
       });
   }
});

router.post('/updategroup', function (req,res) {
    let sessionid = req.query.sessionid;
    let requestbody = {
        groupname: req.body.groupname,
        passfrese: req.body.passfrese,
        year: req.body.year,
        adminemail:''
    }

})
router.post('/addgroup',function(req,res){
    console.log(req.body);
    let sessionid = req.body.sessionid;
    let requestbody = {
        groupname: req.body.groupname,
        passfrese: req.body.passphrase,
        year: req.body.year,
        adminemail:''
    }
    var sql;
    var respoceresult = {
        result:'',
        message: '',
    }
    try{
         //sessionidのかくにん
        sql = 'select * from adminapisession ' +
            'where sessionid ="'+sessionid+'";';
        connection.query(sql,function (err,rows) {
            var sqlresult = rows;
            if(sqlresult.length  < 1) {
                //sessionidが存在しない場合:
                respoceresult.result = 'err';
                respoceresult.message = 'sessionid';
                return res.json(respoceresult);
            }else{
                requestbody.adminemail  = sqlresult[0].email;
                sql = 'insert into grouptable(groupname,adminemail,qcode,endday)' +
                    ' values( "'+requestbody.groupname+'", "'+requestbody.adminemail
                    +'", "'+requestbody.passfrese+'",DATE_ADD(now(),INTERVAL '+requestbody.year+' YEAR));';
                 connection.query(sql,function(err,row){
                    if(err){
                        respoceresult = {
                            result: 'err',
                            message: 'sqlerr'
                        }
                    }else{
                        respoceresult.result = 'success';
                    }
                     return res.json(respoceresult);
                });
            }

        });
    }catch (e){
        return res.json({
            result:'err'
        });
    }
});


module.exports = router;
