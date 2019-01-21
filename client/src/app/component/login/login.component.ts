import { Component, OnInit } from '@angular/core';
import {HttpclientService} from "../../service/http/httpclient.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpservice:HttpclientService) { }

  ngOnInit() {
  }

}
