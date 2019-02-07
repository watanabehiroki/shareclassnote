import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStrageService {
  loginjsonvalue = {
    sessionid: '',
  }
  constructor() { }
  // 処理内容
  setsessionjson(sessionid) {
    this.loginjsonvalue.sessionid = sessionid;
    this.setLocalStrage();
  }
  getsesionid() {this.getLocalStrage();
    this.getLocalStrage();
    return this.loginjsonvalue.sessionid;
  }
  removelocalStrage() {
    localStorage.removeItem('sessionidjsonadmin');
  }
  getlocalstragevalue() {
    let novalueflg = false;
    if (localStorage.getItem('sessionidjsonadmin') == null) {
      novalueflg = true;
    } else {
      novalueflg = false;
    }
    return novalueflg;
  }
  private setLocalStrage() {
    localStorage.setItem('sessionidjsonadmin', JSON.stringify(this.loginjsonvalue));
  }
  private getLocalStrage() {
    this.loginjsonvalue = JSON.parse(localStorage.getItem('sessionidjsonadmin'));
  }
}
