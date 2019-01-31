let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let mysqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(mysqlconf.mysql);
let randonid = require('./module/uniquvalue');

router.post('/clientsubmitnote',function(req,res){
    let sessionid = req.body.sessionid;
    var picture = req.body.base64picture;
    var sql;
    var requestdata = {
        noteid: req.body.noteid,
        clientid: '',
        releaseflg: req.body.releaseflg,
        delflg: req.body.delflg,
        groupname: req.body.groupname,
        adminemail: req.body.adminemail,
        timeid: req.body.timeid,
        subjectid: req.body.subjectid,
    }
    responceresult={
        result:'err',
        message:'',
    }
    sql = 'select * from clientapisession ' +
        'where sessionid="'+sessionid+'";';
    var sqlresponce;
    connection.query(sql,function(err,rows){
        sqlresponce = rows;
        if(!err){
            if(sqlresponce.length > 0){
                requestdata.clientid = sqlresponce[0].userid;
                sql= 'select noteid from classnote';
                connectin.query(sql,function(err,rows){
                   if(!err){
                     sqlresponce = rows;
                     requestdata.noteid = randonid.findsessionid(sqlresponce);
                     sql = 'insert into classnote(noteid,clientid,releaseflg,delflg,groupname,adminemail,timeid,subjectid,lessonday,updateday) values ' +
                         '("'+requestdata.noteid+'","'+requestdata.clientid+'",'+requestdata.releaseflg+','+requestdata.delflg+',"'+requestdata.groupname+'","'
                         +requestdata.adminemail+'",'+requestdata.timeid+','+requestdata.subjectid+',,now());';
                     connection.query(sql,function(err,rows){
                        if(!err){
                            sql = 'insert into uploadtable(noteid,clientid,directorypath) ' +
                                'values ("'+requestdata.noteid+'","'+requestdata.clientid+'","'+picture+'");';
                            connection.query(sql,function(err,rows){
                               if(!err){
                                   sqlresponce.result = 'success';
                                   sqlresponce.message= 'addnote';
                               }
                            });
                        }
                     });
                   }

                });
            }
        }

        return res.json(requestdata);
    });
});


module.exports = router;
