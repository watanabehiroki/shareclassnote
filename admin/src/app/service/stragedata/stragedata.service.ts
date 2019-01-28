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
  setsqldata(adminemail, passphase, groupname) {
    this.qrcodedata.adminemail = adminemail;
    this.qrcodedata.passphase = passphase;
    this.qrcodedata.groupname = groupname;
  }
  removesqldata() {
    this.qrcodedata = {
      adminemail: '',
      passphase: '',
      groupname: '',
    };
  }
  getsqldata() {
    return this.qrcodedata;
  }
}
