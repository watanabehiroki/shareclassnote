const randommodule = require('./random');

function findnoteid(reqdata){
    var returnvalue;
    whileflg= true;
    while(whileflg){
        returnvalue = randommodule.getrandomstring(6);
        if(reqdata.length <1){
            //最初の場合
            whileflg = false;
        }else{
            for(var i=0;i<reqdata.length; i++){
                if(i== reqdata.length-1 && reqdata[i].noteid != returnvalue){
                    whileflg = false;
                }
            }
        }
    }
}

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
