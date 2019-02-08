import { Component, OnInit } from '@angular/core';
import { LocalStrageService } from '../../../service/local_strage/local-strage.service';
import {Router} from "@angular/router";
import {HttpclientService} from "../../../service/http/httpclient.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user= {
    name:'',
    picture:'',
  }
  constructor(private router:Router,
              private localStrageSrtvice:LocalStrageService,
              private httpservice: HttpclientService) { }

  ngOnInit() {
    let httpdata;
    this.httpservice.httpget('/users/getmyprofile?sessionid='+this.localStrageSrtvice.getsessionid()).subscribe(data => {
      httpdata = data;
      if(httpdata.result == 'success'){
        httpdata  = httpdata.datas[0];
        this.user.name = httpdata.firstname ;
      }
    });
  }
  logoutclick(){
    this.localStrageSrtvice.removelocalstrage();
    this.router.navigate(['login']);
  }
}
