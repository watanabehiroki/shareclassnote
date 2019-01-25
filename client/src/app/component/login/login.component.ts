import { Component, OnInit } from '@angular/core';
import {HttpclientService} from "../../service/http/httpclient.service";
import {LocalStrageService} from "../../service/local_strage/local-strage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resultdata='';
  loginobj = {
    password:'',
    userid: ''
  }
  constructor(private httpservice: HttpclientService,
              private locastrageservice: LocalStrageService,
              private router:Router) { }

  ngOnInit() {
    if(!this.locastrageservice.getlocalstragevalue()){
      this.router.navigate(['/home']);
    }
  }
  submitclick(){
    var sqlresponce ;
    this.httpservice.httppost('/login/clientlogin',this.loginobj)
      .subscribe(datas => {
        sqlresponce = datas;
        if(sqlresponce.result=='success' && sqlresponce.login == 'success') {
          this.locastrageservice.setsessionjson(sqlresponce.sessionid);
          this.router.navigate(['/home']);
        }else{
          this.resultdata="ID又は、パスワードが間違っています";
        }
      });
  }
}
