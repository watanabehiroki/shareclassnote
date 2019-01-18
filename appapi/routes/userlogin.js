var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');
const connection = mysql.createConnection(sqlconf);


router.get('/sample',function (req,res) {
    res.json({sample:"smaple"});
});

router.post('/clientlogin',function(req,res){
    const userid = req.body.userid;
    const password = req.body.password;
    var sql = "select * from userid clientuser left outer join " +
        "clientapisession on clientuser.userid = clientapisession.userid where " +
        "clientuser.userid = "+userid+";";
    connection.query()
});
module.exports = router;
