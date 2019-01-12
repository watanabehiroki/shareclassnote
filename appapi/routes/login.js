var express = require('express');
var router = express.Router();

/*GET only*/
/*router.get('/gethashkey',function(req,res) {
    var requserid = req.body.id;
    if(){

    }
});*/
/*ログイン認証 client*/
router.post('/logincertifi',function(req,res){
    var result = "";
    var userid = req.body.userid;
    var password = req.body.password;

    if(userid !==undefined && password !== undefined){
        if(true){
            /*Login成功時*/
        }else{
            /*Login失敗時*/
        }
    }else{
        result.result = false;
        result.message = "loginerror";
    }
    return result;
});
/*ログイン認証 admin*/
router.post('/admin/logincertifi',function(req,res){
   var result = "";
   var userid = req.body.userid;
   var password= req.body.password;
   return res.json({null});
});

/*POST only*/
module.export=router;
