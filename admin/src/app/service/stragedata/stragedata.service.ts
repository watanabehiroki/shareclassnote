import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StragedataService {
  qrcodedata = {
    adminemail: '',
    passphase: '',
    groupname: '',
  }
  constructor() { }
  confirmqrdataflg() {
    var  resultflg = false;
    if (this.qrcodedata.adminemail !== undefined || this.qrcodedata.adminemail !== null
      || this.qrcodedata.adminemail !== '') {
      resultflg = true;
    }
    return resultflg
  }
  setqrdata(adminemail, passphase, groupname) {
    this.qrcodedata.adminemail = adminemail;
    this.qrcodedata.passphase = passphase;
    this.qrcodedata.groupname = groupname;
  }
  removeqrdata() {
    this.qrcodedata = {
      adminemail: '',
      passphase: '',
      groupname: '',
    };
  }
  getqrdata() {
    return this.qrcodedata;
  }
}
