import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/httpservice/http.service';
import { LocalStrageService } from '../../service/local_strage/local-strage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resultresponce = '';
  userlogin = {
    password: '',
    email: ''
  }
  constructor(private httpservice: HttpService,
              private localstrageService: LocalStrageService,
              private router: Router) { }
  ngOnInit() {
    if (!this.localstrageService.getlocalstragevalue()) {
      this.router.navigate(['/addadmin']);
    }
  }
  loginclick() {
    let responcedata;
    this.httpservice.httppost('/login/adminlogin', this.userlogin).subscribe(resdata => {
      responcedata = resdata;
      if (responcedata.result === 'success' && responcedata.login === 'success') {
        this.localstrageService.setsessionjson(responcedata.sessionid);
        this.router.navigate(['/addadmin']);
      } else {
        this.resultresponce = 'メールアドレスかパスワードが間違っています';
      }
    });
  }
}
