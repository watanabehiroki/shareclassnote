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
module.exports = {
    NoteFileWriter,
    NoteFileRead,
}
