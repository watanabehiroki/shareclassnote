let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let mysqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(mysqlconf.mysql);
let randomid = require('./module/uniquvalue');
var filemodule = require('./module/File');
router.get('/clientallsubmitnote',function (req,res) {
    var responcedata= {
        result:'err',
        message:'',
        datas:'',
    }
    var reqdata ={
        sessionid: req.query.sessionid,
        userid:'',
    }
    var sql;
    var sqldata;
    sql = 'select userid,endday from clientapisession ' +
        'where sessionid = "'+reqdata.sessionid+'";';
    connection.query(sql,function(err,rows){
        sqldata = rows;
        if(!err && sqldata.length > 0){
            reqdata.userid = sqldata[0].userid;
            sql ='select classnote.noteid,classnote.groupname,time.name as timename,classnote.releaseflg ,subject.name as subjectname, subject.color as subjectcolor,classnote.lessonday,classnote.updateday,classnote.adminemail,uploadtable.directorypath from classnote left outer join uploadtable on classnote.noteid = uploadtable.noteid and ' +
                'uploadtable.clientid = classnote.clientid left outer join subject on classnote.subject = subject.id left outer join time on time.id= classnote.timeid where classnote.clientid = "'+reqdata.userid+'" and delflg = false;';
            connection.query(sql,function (err,rows) {
                sqldata  = rows;
                if(!err && sqldata.length > 0){
                    sqldata.forEach(function(noteobj){
                        if(!(noteobj.directorypath === null || noteobj.directorypath === undefined || noteobj.directorypath === '')) {
                            noteobj["base64picture"] = filemodule.NoteFileRead(noteobj.directorypath);
                            noteobj.directorypath = '';
                        }
                    });
                    responcedata.result='success';
                    responcedata.datas = sqldata;
                }
                return  res.json(responcedata);
            });
        }else{
            return res.json(responcedata);
        }
    });
})
router.post('/clientsubmitnote',function(req,res){
    let sessionid = req.body.sessionid;
    var sql;
    var requestdata = {
        base64picture: req.body.base64picture,
        noteid: '',
        clientid: '',
        releaseflg: req.body.releaseflg,
        delflg: false,
        group: {
            groupname: req.body.groupname,
            adminemail: req.body.adminemail,
        },
        adminemail: req.body.adminemail,
        timeid: req.body.timeid,
        subjectid: req.body.subjectid,
        year: req.body.year,
    }
    var responceresult={
        result:'err',
        message:'',
    }
    sql = 'select * from clientapisession ' +
        'where sessionid="'+sessionid+'";';
    var sqlresponce;
    console.log(sql);
    connection.query(sql,function(err,rows){
        sqlresponce = rows;
        if(!err){
            if(sqlresponce.length > 0){
                requestdata.clientid = sqlresponce[0].userid;
                sql= 'select noteid from classnote';
                connection.query(sql,function(err,rows){
                   if(!err){
                     sqlresponce = rows;
                     requestdata.noteid = randomid.findsessionid(sqlresponce);
                     sql = 'insert into classnote(noteid,clientid,releaseflg,delflg,groupname,adminemail,timeid,subject,lessonday,updateday) values ' +
                         '("'+requestdata.noteid+'","'+requestdata.clientid+'",'+requestdata.releaseflg+','+requestdata.delflg+',"'+requestdata.group.groupname+'","'
                         +requestdata.group.adminemail+'",'+requestdata.timeid+','+requestdata.subjectid+",cast('"+requestdata.year+"' as date),now());";
                     connection.query(sql,function(err,rows){
                        if(!err){
                            requestdata.picturepath = requestdata.noteid + '|' +requestdata.clientid;
                            sql = 'insert into uploadtable(noteid,clientid,directorypath) ' +
                                'values ("'+requestdata.noteid+'","'+requestdata.clientid+'","'+requestdata.noteid+'.'+requestdata.clientid+'");';
                            console.log(sql);
                            connection.query(sql,function(err,rows){
                               if(!err){
                                   filemodule.NoteFileWriter(requestdata.noteid+'.'+requestdata.clientid,requestdata.base64picture);
                                   responceresult.result = 'success';
                                   responceresult.message= 'addnote';
                               }
                               return res.json(responceresult);
                            });
                        }
                     });
                   }

                });
            }
        }

    });
});


module.exports = router;
