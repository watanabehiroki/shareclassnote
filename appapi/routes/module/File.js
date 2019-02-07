let filepath = './datas';
let fs = require('fs');
function NoteFileWriter(path,data) {
    fs.writeFile(filepath+'/note/'+path+'.txt',data,'utf8',
        function (err) {
            if(err){
                throw err;
            }
        });
}
function NoteFileRead(path){
    return fs.readFileSync(filepath+'/note/'+path+'.txt','utf8');
}
function clientprofileRead(path){
    return fs.readFileSync(filepath+'/user/client/'+path+'.txt','utf8');
}
function clientprofileWrite(path,data){
    fs.writeFile(filepath+'/user/client/'+path+'.txt',data,'utf8',function(err){
        if(err){
            throw err;
        }
    });
}
function clientexistflg(path){
    resultflg = false;
    try{
        fs.statSync(filepath+'/user/client/'+path+'.txt');
        return true;
    }catch(err){
        if(err.code === 'ENOENT'){
            return false;
        }
    }
}
module.exports = {
    NoteFileWriter,
    NoteFileRead,
    clientprofileRead,
    clientprofileWrite,
    clientexistflg,
}
