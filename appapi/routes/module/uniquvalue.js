const randommodule = require('./random');

function findsessionid(reqdata){
    //変数(reqdata)はすでにデータベースに登録されているデータリストとする
    var returnvalue;
    whileflg = true;
    var rquiredata=reqdata;
    while (whileflg) {
        returnvalue = randommodule.getrandomstring(7);
        if(rquiredata.length < 1){
            whileflg = false;
        }else{
            for (var i = 0; i < rquiredata.length; i++) {
                if (i == rquiredata.length-1 && rquiredata[i].sessionid != returnvalue) {
                    whileflg = false;
                }
            }

        }
    }

    return returnvalue;
}


module.exports = {
    findsessionid
}
