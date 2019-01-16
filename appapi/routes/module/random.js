var crypto = require('crypto');
export  function getrandomint(){
    let array = new Uint8Array(6);
    return crypto.getRandomValues(array);
}
export function getrandomstring(){

}
