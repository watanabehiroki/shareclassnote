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
module.exports = router;
