let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let mysqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(mysqlconf.mysql);
var filemodule = require('./module/File');

router.get('/homenote',function(req,res){
    var httprequestdata = {
        sessionid:req.query.sessionid,
        userid: '',
    }
    var httpresponcedata = {
        result :'err',
        datas: ''
    }
    var sql = 'select userid from clientapisession ' +
        'where sessionid="'+httprequestdata.sessionid+'";';
    console.log(sql);
    connection.query(sql,function(err,datas){
        var sqldata = datas;
       if(!err && sqldata.length > 0){
           httprequestdata.userid = sqldata[0].userid;
           sql = 'select classnote.lessonday, uploadtable.directorypath, classnote.groupname, subject.name from groupmember ' +
               'left outer join classnote on groupmember.adminemail=classnote.adminemail' +
           ' and groupmember.groupname=classnote.groupname and groupmember.clientid=classnote.clientid ' +
           'left outer join clientuser on clientuser.userid = classnote.clientid ' +
           'left outer join uploadtable on classnote.noteid = uploadtable.noteid and classnote.clientid = uploadtable.clientid ' +
           'left outer join subject on classnote.subject = subject.id  left outer join time on time.id = classnote.timeid ' +
           'where classnote.delflg=false and classnote.releaseflg=true and groupmember.clientid="'+
               httprequestdata.userid+'" and classnote.updateday = CURRENT_DATE() order by classnote.lessonday  limit 10 ;';
           console.log(sql);
           connection.query(sql,function (err,rows) {
               sqldata = rows;
               console.log(sqldata);
               sqldata.forEach(function(noteobj){
                  noteobj['base64picture'] = filemodule.NoteFileRead(noteobj.directorypath);
               });
               if(!err && rows.length >0){
                   httpresponcedata.result = 'success';
                   httpresponcedata.datas = rows;
              }
               return res.json(httpresponcedata);
           });
       }else{
           return res.json(httpresponcedata);
       }
    });
});

module.exports = router;
