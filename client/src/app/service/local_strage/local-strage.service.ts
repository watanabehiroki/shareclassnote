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
    this.loginjsonvalue.sessionid = sessionid;
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
    if(localStorage.getItem('jsonvalue') === null){
      novalueflg =true;
    }else {
      novalueflg = false;
    }
    return novalueflg;
  }
 private setLocalStorage(jsonvalue){
    localStorage.setItem('jsonvalue',JSON.stringify(jsonvalue));
  }
 private getLocalStrage(){
    this.loginjsonvalue = JSON.parse(localStorage.getItem('jsonvalue'));
  }
}
