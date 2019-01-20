var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const sqlconf = require('../config/sqlconfig');
const connection = mysql.createConnection(sqlconf.mysql);
var  randommodule = require('./module/random');


/* GET users listing. */
router.get('/getallclient', function( req, res){
  var sql = 'select * from clientuser;'
  var resultdata;
  try{
    connection.query(sql,function (err,rows) {
      if(err){
        resultdata = {
         result: 'err',
         message: err
        }
      }else{
        resultdata = rows;
      }
      return res.json(resultdata);
    });
  }catch (e){
    return resultdata = {
      result: 'err',
      message: 'catcherr'
    }
  }
});


router.post('/clientuseradd', function(req,res){
  var name ={
    fistname: req.bodu.fistname,
    lastname: req.body.lastname,
    fistkananame: req.body.fistkananame,
    lastkananame: req.body.lastkananame
  };
  var age = req.body.age;
  var mailflg = req.body.mailflg;
  var password = req.body.password;
  var insertusersql ;
  var result;
  var userid ='';
  var findsql;
  try{
    //userid 生成
    while(true) {
      userid = randommodule.getrandomstring(4);
      findsql ='select count(*) as number from clientuser' +
          ' where userid = "'+userid+'";';
          connection.query(sql,function(err,rows){
            result = rows;
            if(err){
              userid = undefined;
              break;
            }else {
              if (result[0].number < 1) {
                 break;
              }
            }
          });
    }
    if(password === undefined || password === null || password === ''){
      //パスワード自動生成を行う。
      password = randommodule.getrandomstring(5);
    }
    insertusersql = 'inset into clientuser(userid,firstname,lastname,fistnamekana,lastnamekana' +
        ',age,defflg,password) values ("'+userid+'","'+name.fistname+'","' +
        name.lastname+'","'+name.fistnamakana+'","'+name.lastnamakana+'",'+age+','+false+',"'+password+'");';
    //データベースへの登録処理

    connection.query(insertusersql,function (err,rows){
      //データ加工を行う
      if(err){
        result = {
          result: 'err',
          message: err
        }
      }else{
        result = rows;
        result = {
          result: 'success',
          password: result[0].password
        }
      }
      return res.json(result);
    });
  }catch (e){
    result = {
      result: 'err',
      message: 'catcherr'
    }
  }
  return res.json(result);
});


module.exports = router;
