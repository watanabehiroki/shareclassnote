var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');
/* GET users listing. */

router.post('/clientuseradd', function(req,res){
  var name = res.body.name;
  var age = res.body.age;
  var mailflg = res.body.mailflg;
  var profilepicture = res.body.profilepicture;
  var password = res.body.password;
  var insertusersql = "inset into clientuser(name,profilepicture,mailflg,age,defflg,password)"+
                          "values("+")";
  try{
    if(password === undefined){
      //パスワード自動生成を行う。

    }
    connection.query(insertusersql,function (err,rows){
      //データ加工を行う
      if(err){
        console.log()
      }else{

      }
      return res.json();
    });
  }catch (e){

  }
  return res.json()
})
module.exports = router;
