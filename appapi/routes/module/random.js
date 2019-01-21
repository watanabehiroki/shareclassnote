var crypto = require('crypto');
  function getrandomint(){
    let array = new Uint8Array(6);
    return crypto.getRandomValues(array);
}
 function getrandomstring(byte){
    return crypto.randomBytes(byte).toString('hex');
}
module.exports ={
    getrandomstring,
    getrandomint
}
