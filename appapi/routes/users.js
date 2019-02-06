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
router.get('/getmyprofile',function(req,res){
  let sessionid = req.query.sessionid;
  var sql ;
  var responcedata = {
    result: 'err',
    message:'',
    datas:'',
  }

  try{
    sql = 'select * from clientuser left outer join clientapisession on clientuser.userid = clientapisession.userid where ' +
        'clientapisession.sessionid="'+sessionid+'";';
    console.log(sql);
    connection.query(sql,function(err,rows){
      let sqldata = rows;
      if(!err && sqldata.length >0){
        responcedata.datas = sqldata;
        responcedata.result = 'success';
      }
      return res.json(responcedata);
    });
  }catch(e){
    return responcedata;
  }
});



router.post('/adminuseradd',function(req,res){
  var user = {
    name:{
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      firstkananame: req.body.firstkananame,
      lastkananame: req.body.lastkananame
    },
    password:req.body.password,
    email:req.body.email,
    age: req.body.age,
  }
  var sql;
  var result;
  try{
    sql = 'select email as number from adminuser' +
        ' where email = "'+user.email+'";';
    //userid生成検索
    connection.query(sql,function(err,rows){
      var data = rows;
      if(err){
        return res.json({
          result:'err',
          messasge:'sqlfirsterr',
          errconf: err
        });
      }else{
        if(data.length > 0 ){

          result = {
            result:'success',
            message: 'knowuser'
          }

        }else {
          //password自動生成
          if (user.password !== null || user.password != undefined
              || user.password != '') {
            user.password = randommodule.getrandomstring(5);
          }
          //データベースに登録
          sql = 'insert into adminuser(firstname, lastname, firstkananame, lastkananame,' +
              ' age, deflg, password, rolenumber,email) values ( "' + user.name.firstname +
              '","' + user.name.lastname + '","' + user.name.firstkananame + '","' + user.name.lastkananame + '",' + user.age + ','
              + false + ',"' + user.password + '","1","' + user.email + '");';
          connection.query(sql, function (err, rows) {
            if (err) {
              result = {
                result: 'err',
                messagge: 'sqlerr',
                errmessage: err
              }
            } else {
              result = {
                result: 'success',
                password: user.password,
                message: '登録しました。'
              }
            }
            return res.json(result);
          });
        }
      }
    });
  }catch (e){
    result = {
      result : err,
      message: tryerr
    }
    return res.json(result);
  }
});




router.post('/clientuseradd', function(req,res){
  var name ={
    fistname: req.body.firstname,
    lastname: req.body.lastname,
    fistkananame: req.body.firstkananame,
    lastkananame: req.body.lastkananame
  };
  var age = req.body.age;
  var mailflg = req.body.sex;
  var password = req.body.password;
  var sql ;
  var result;
  var userid ='';
  try{
    //userid 生成
    sql ='select userid from clientuser;';
    connection.query(sql,function(err,rows){
      result = rows;
      if(err){
        result={
          result:'err',
          message:'sqlerr'
        }
      }else{
        var whileflg= true;
        userid = randommodule.getrandomstring(4);
        if(result.length > 0) {
          while (whileflg) {
            for (var i = 0; i < result.length; i++) {
              if (i == (result.length - 1) && result[result.length - 1].userid != userid) {
                whileflg = false;
                break;
              }
            }
          }
        }
        if(password === undefined || password === null || password == ""){
          //パスワード自動生成を行う。
          password = randommodule.getrandomstring(5);
        }
        sql = 'insert into clientuser(userid,firstname,lastname,firstkananame,lastkananame' +
            ',age,delflg,password) values ("'+userid+'","'+name.fistname+'","' +
            name.lastname+'","'+name.fistkananame+'","'+name.lastkananame+'",'+age+','+false+',"'+password+'");';
        //データベースへの登録処理

        connection.query(sql,function (err,rows){
          //データ加工を行う

          var rowsdata= rows;
          if(err){
            result = {
              result: 'err',
              message: err
            }
          }else{
            result = {
              result: 'success',
              password: password
            }
          }
          return res.json(result);
        });
      }
    });
  }catch (e){
    result = {
      result: 'err',
      message: 'catcherr',
      errmessages:e
    }
    return res.json(result);
  }

});


module.exports = router;
