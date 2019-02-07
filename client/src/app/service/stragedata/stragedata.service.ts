import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StragedataService {
  noteobj: any = undefined;
  groupqrcodedata = {
    adminemail:'',
    passphrase:'',
    groupname: ''
  }
  constructor() { }
  removenoteobj(){
    this.noteobj = undefined;
  }
  noteobjflg(){
    var result = false;
    if(this.noteobj !== undefined) {
      result = true;
    }
    return result;
  }
  setnoteobj(noteobj){
    this.noteobj　= noteobj;
  }
  getnoteobj(){
    return this.noteobj
  }
  qrdataconfirmflg() {
    var result = false;
    if (this.groupqrcodedata.adminemail.length > 0 || this.groupqrcodedata.adminemail !== "") {
      result = true;
    }
    return result
  }

  getgroupqrcode(){
    return this.groupqrcodedata;
  }
  removegroupqrcode(){
   this.groupqrcodedata = {
     adminemail:'',
     passphrase:'',
     groupname: ''
   }
  }
  setgroupqrcode(qrdata){// 成功時true/失敗時false
    //formatはadminemail-groupname-passpharse
    var resultflg = false;
    var splitqrcode = qrdata.split('*');
    if(splitqrcode.length === 3) {
      this.groupqrcodedata.adminemail = splitqrcode[0];
      this.groupqrcodedata.groupname = splitqrcode[1];
      this.groupqrcodedata.passphrase = splitqrcode[2];
      resultflg = true;
    }
    return resultflg;
  }
}
