let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let mysqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(mysqlconf.mysql);

router.get('/getalltime',function(req,res){
    var resultdata={
        result:'err',
        datas:'',
    }
    var sql;
    sql='select * from time';
    connection.query(sql,function (err,rows) {
        var sqldata = rows;
        if(!err || sqldata.length > 0) {
            resultdata.result = 'success';
            resultdata.datas = sqldata;
        }
        return res.json(resultdata);
    })
});
router.post('/edittime',function(req,res){
    var httprequestbody = {
        sessionid: req.body.sessionid,
        name: req.body.name,
        timeid: req.body.timeid,
    }
    var resultdata = {
        result:'err'
    }
    var sql  = 'select email from adminapisession' +
        ' where sessionid ="'+httprequestbody.sessionid+'";';
    connection.query(sql,function(err,rows){
        let sqldata = rows;
        if(!err && sqldata.length > 0){
            sql = 'update time set name' +
                '="'+httprequestbody.name+'" where id='+httprequestbody.timeid;
            connection.query(sql,function(err,rows){
               if(!err){
                   resultdata.result = 'success';
               }
               return res.json(resultdata);
            });
        }else{
            return res.json(resultdata);
        }
    })
})
router.post('/addtime',function(req,res){
    var httprequestbody={
        sessionid: req.body.sessionid,
        name: req.body.timename,
    }
    var responcedata = {
        result:'err',
    }
    var sql;
    sql = 'select email from adminapisession ' +
        'where sessionid="'+httprequestbody.sessionid+'";';
    connection.query(sql,function(err,rows){
        var sqldata = rows;
       if(!err && sqldata.length > 0){
           sql = 'insert into time(name) ' +
               'values ("'+httprequestbody.name+'");';
           connection.query(sql,function(err,rows){
              if(!err) {
                  responcedata.result = 'success';
              }
              return res.json(responcedata);
           });
       }else{
           return res.json(responcedata);
       }

    });
});
module.exports = router;
