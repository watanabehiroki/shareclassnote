let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let mysqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(mysqlconf.mysql);

//クライントユーザが登録したグループを取り出す.
router.get('/getclientallgroup',function (req,res) {
    let sessionid = req.query.sessionid;
    var sql;
    var userid;
    var resultdata = {
        result:'err',
        groupdatas:'',
    }
    sql ='select * from clientapisession ' +
        'where sessionid = "'+sessionid+'";';
    connection.query(sql,function(err,rows){
        if(!err){
            let sqldata = rows;
            if(sqldata.length > 0){
                userid = sqldata[0].userid;
                sql = 'select * from groupmember left outer join grouptable on groupmember.adminemail = grouptable.adminemail and grouptable.groupname = groupmember.groupname ' +
                    'left outer join adminuser on grouptable.adminemail = adminuser.email where groupmember.clientid = "'+userid+'";';
                console.log(sql);
                connection.query(sql,function(err,rows){
                   if(!err){
                       resultdata.result = "success";
                       resultdata.groupdatas = rows;
                   }
                    return res.json(resultdata);
                })
            }else{
                return res.json(resultdata);
            }

        }

    });
});
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

router.post('/findgroupclient', function (req,res) {
    let sessionid = req.body.clientsession;
    let groupname = req.body.groupname;
    let adminemail = req.body.adminemail;
    let passphrase = req.body.passphrase;
    //client sessionかくにん
    var sql;
    var resultdata = {
        result:'err',
        datas:'',
    }
    sql = 'select * from clientapisession ' +
        'where sessionid = "'+sessionid+'";';
    console.log(sql);
    connection.query(sql, function (err,rows){
        var sqlresultdata;

       if(err){
           return res.json(resultdata);
       } else {
           sqlresultdata = rows;
           if(sqlresultdata.length >0){
               //session存在する
               sql = 'select * from grouptable left join adminuser on adminuser.email = grouptable.adminemail ' +
                   'where grouptable.adminemail = "'+adminemail+'" and grouptable.groupname = "'+groupname+'" and grouptable.qcode = "'+passphrase+'";';
               console.log(sql);
               connection.query(sql,function (err,rows) {
                  if(err){
                  } else {
                      sqlresultdata = rows;
                      if(sqlresultdata.length > 0) {
                          resultdata.result='success';
                        resultdata.datas = sqlresultdata[0];
                      }
                  }
                  return res.json(resultdata);
               });
           }else{
               return res.json(resultdata);
           }
       }
    });
});
router.post('/qraddgroupclient',function (req,res) {
    let clientsessionid = req.body.clientsessionid;
    let groupname = req.body.groupname;
    let adminemail = req.body.adminemail;
    let passphrase = req.body.passphrase;
    let clientid;
    //sessionid confirm
    var sql;
    var result = {
        result:'err',
        addresult: false,
    }
    sql = 'select * from clientapisession ' +
        'where sessionid= "'+clientsessionid+'";';
    connection.query(sql, function (err,rows) {
        var sqldata;
        if(err){
        }else{
            sqldata = rows;
            if(rows.length > 0){
                clientid = rows[0].userid;
                sql = 'select * from grouptable ' +
                    'where groupname="'+groupname+'" and adminemail = "'+adminemail+'" and qcode = "'+passphrase+'";';
                console.log(sql);
                connection.query(sql,function (err, rows) {
                    if(!err){
                        sqldata = rows;
                        if(sqldata.length > 0 ){
                            sql = 'insert into groupmember(adminemail,groupname,clientid,delflg)' +
                                'values ("'+adminemail+'","'+groupname+'","'+clientid+'",false)';
                            connection.query(sql,function (err,rows) {
                                if(!err){
                                    result.result = 'success';
                                    result.addresult = true;
                                }else{
                                    result.result = 'success';
                                    result.addresult = false;
                                }
                                return res.json(result);
                            })
                        }
                    }

                })

            }else{
                return res.json(result);
            }

        }
    });
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
                })
            }

        });
    }catch (e){
        return res.json({
            result:'err'
        });
    }
});


module.exports = router;
