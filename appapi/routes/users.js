let express = require('express');
let router = express.Router();
let mysql = require('mysql');
let sqlconf = require('../config/sqlconfig');
let connection = mysql.createConnection(sqlconf.mysql);
var  randommodule = require('./module/random');
let filemodule = require('./module/File');

/* GET users listing. */
router.get('/getallclient', function( req, res){
  var sessionid = req.query.sessionid;
  var sql;
  var resultdata;
  try{
    sql = 'select email from adminapisession ' +
        'where sessionid ="'+sessionid+'";'
    connection.query(sql,function (err,rows) {
      let sqldata = rows;
      if(!err && sqldata.length > 0){
        sql = 'select userid, firstname, lastname, age from clientuser;';
        connection.query(sql,function (err,rows) {
          if(err){
            resultdata = {
              result: 'err',
              message: err
            }
          }else{
            resultdata={
              result:'success',
              datas: rows
            }
          }
          return res.json(resultdata);
        });
      }else{
        return res.json({
          result: 'err',
          message:'',
        })
      }
    })

  }catch (e){
    return resultdata = {
      result: 'err',
      message: 'catcherr'
    }
  }
});

router.get('/getalladminuser',function(req,res){
  let sessionid = req.query.sessionid;
  var sql;
  var sqlresult = {
    result:'err',
    datas: '',
  }
  sql = 'select email from adminapisession' +
      ' where sessionid ="'+sessionid+'";'
  connection.query(sql,function (err,rows) {
    var sqldata = rows;
    if(!err && sqldata.length > 0){
      sql = 'select firstname, lastname, age from adminuser;';
      connection.query(sql,function (err, rows) {
        if(!err){
          sqlresult.result = 'success';
          sqlresult.datas = rows;
        }
        return res.json(sqlresult);
      })
    }else{
      return res.json(sqlresult);
    }
  })
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
          messasge:'sqlfirsterr'
        });
      }else{
        if(data.length > 0 ){

          result = {
            result:'success',
            message: 'knowuser'
          }

        }else {
          //password自動生成
            console.log(user.password !== '');
          if (!( user.password !== '' || user.password !== null || user.password != undefined)) {
            user.password = randommodule.getrandomstring(5);
          }
          //データベースに登録
          /*sql = 'insert into adminuser(firstname, lastname, firstkananame, lastkananame,' +
              ' age, deflg, password, rolenumber,email) values ( "' + user.name.firstname +
              '","' + user.name.lastname + '","' + user.name.firstkananame + '","' + user.name.lastkananame + '",' + user.age + ','
              + false + ',"' + user.password + '","sample","' + user.email + '");';
          */
            sql = 'insert into adminuser(firstname, lastname, firstkananame, lastkananame,' +
                ' age, deflg, password, rolenumber,email) values ( "' + user.name.firstname +
                '","' + user.name.lastname + '","' + user.name.firstkananame + '","' + user.name.lastkananame + '",' + user.age + ','
                + false + ',"' + user.password + '","1","' + user.email + '");';
          connection.query(sql, function (err, rows) {
            if (err) {
              result = {
                result: 'err',
                messagge: 'sqlerr'
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


router.get('/getmyprofile',function(req,res){
  let sessionid = req.query.sessionid;
  var sql ;
  var responcedata = {
    result: 'err',
    message:'',
    datas:'',
  }

  try{
    sql = 'select clientuser.firstname,clientuser.lastname,clientuser.firstkananame,clientuser.lastkananame,' +
        'clientuser.profilepicture,clientuser.mailflg,clientuser.age from clientuser left outer join clientapisession on clientuser.userid = clientapisession.userid where ' +
        'clientapisession.sessionid="'+sessionid+'" and delflg = false;';
    connection.query(sql,function(err,rows){
      let sqldata = rows;
      if(!err && sqldata.length >0){
        sqldata[0].base64profile = '';
        if(sqldata[0].profilepicture !== '' || sqldata[0].profilepicture !== null){
          //ファイルの存在確認
          if(filemodule.clientexistflg(sqldata[0].profilepicture)) {
            sqldata[0].base64profile = filemodule.clientprofileRead(sqldata[0].profilepicture);
          }
        }
        responcedata.datas = sqldata;
        responcedata.result = 'success';
      }
      return res.json(responcedata);
    });
  }catch(e){
    return responcedata;
  }
});

//自分自身の
router.post('/clienteditprofile',function (req,res) {
  var httprequest = {
    sessionid: req.body.sessionid,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    firstkananame: req.body.firstkananame,
    lastkananame: req.body.lastkananame,
    mailflg: req.body.mailflg,
    age: req.body.age,
    base64profile: req.body.base64profile,
    clientid:'',
    profiliepicture:'',
  }
  var responcedata ={
    message:'',
    result:'err',

  }
  var sql = '';
  sql = 'select userid from clientapisession  ' +
      'where sessionid = "'+httprequest.sessionid+'";';
  connection.query(sql,function(err,rows){
    var sqldata = rows;
    if(!err && sqldata.length > 0){
      httprequest.clientid = sqldata[0].userid;
      if(!(httprequest.base64profile == '' || httprequest.base64profile == null|| httprequest.base64profile == undefined)) {
        httprequest.profiliepicture = httprequest.clientid;
        filemodule.clientprofileWrite(httprequest.profiliepicture, httprequest.base64profile);
      }
      sql = 'update clientuser set ' +
          'firstname="'+httprequest.firstname+'",lastname="'+httprequest.lastname+'",' +
          'firstkananame="'+httprequest.firstkananame+'",lastkananame="'+httprequest.lastkananame+'",mailflg='+httprequest.mailflg+
          ',age='+httprequest.age+',profilepicture="'+httprequest.profiliepicture+'" where userid = "'+httprequest.clientid+'";';
      connection.query(sql,function(err,rows){
        if(!err){
          responcedata.result = 'success';
          responcedata.message = 'editprofile';
        }else{
          responcedata.result = 'err';
          responcedata.result = 'editfail';
        }
        return res.json(responcedata);
      });
    }else{
      responcedata.message='sessionid';
      return res.json(responcedata);
    }

  });
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
  var userid = req.body.id;
  console.log(req.body);
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
        if(userid !== ''){
          result.forEach(function(idobj){
            if(userid == idobj.userid){
              userid = null;
              return res.json({
                result:'err',
                message:'sameid',
              });
            }
          });
        }else {
          userid = randommodule.getrandomstring(4);
          if (result.length > 0) {
            while (whileflg) {
              for (var i = 0; i < result.length; i++) {
                if (i == (result.length - 1) && result[result.length - 1].userid != userid) {
                  whileflg = false;
                  break;
                }
              }
            }
          }
        }
        if(userid !== null) {
          if (password === undefined || password === null || password == "") {
            //パスワード自動生成を行う。
            password = randommodule.getrandomstring(5);
          }
          sql = 'insert into clientuser(userid,firstname,lastname,firstkananame,lastkananame' +
              ',age,delflg,password) values ("' + userid + '","' + name.fistname + '","' +
              name.lastname + '","' + name.fistkananame + '","' + name.lastkananame + '",' + age + ',' + false + ',"' + password + '");';
          //データベースへの登録処理

          connection.query(sql, function (err, rows) {
            //データ加工を行う

            var rowsdata = rows;
            if (err) {
              result = {
                result: 'err',
                message: err
              }
            } else {
              result = {
                result: 'success',
                password: password,
                userid: userid,
              }
            }
            return res.json(result);
          });
        }
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
