import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStrageService {
 loginjsonvalue={
    sessionid:'',
  };
  constructor() { }
  //処理内容
  setsessionjson(sessionid) {
    this.loginjsonvalue={sessionid: sessionid};
    this.setLocalStorage(this.loginjsonvalue);
  }
  removelocalstrage(){
    localStorage.removeItem('jsonvalue');
  }
  getsessionid(){
    this.getLocalStrage();
    return this.loginjsonvalue.sessionid;
  }
  getlocalstragevalue(){
    var novalueflg = false;
    this.getLocalStrage();
    if(this.loginjsonvalue === null||this.loginjsonvalue.sessionid === '' || this.loginjsonvalue.sessionid === null ||
      this.loginjsonvalue.sessionid === undefined  ){
      novalueflg =true;
    }else {
      novalueflg = false;
    }
    return novalueflg;
  }
 private setLocalStorage(jsonobj){
    localStorage.setItem('jsonvalue',JSON.stringify(jsonobj));
  }
 private getLocalStrage(){
    this.loginjsonvalue = JSON.parse(localStorage.getItem('jsonvalue'));
  }
}
