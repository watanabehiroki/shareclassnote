import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/httpservice/http.service';
import { LocalStrageService } from '../../service/local_strage/local-strage.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userlogin = {
    password: '',
    email: ''
  }
  constructor(private httpservice: HttpService,
              private localstrageService: LocalStrageService,
              private router: Router) { }
  ngOnInit() {
    if (!this.localstrageService.getlocalstragevalue()) {
      this.router.navigate(['/home']);
    }
  }

}
