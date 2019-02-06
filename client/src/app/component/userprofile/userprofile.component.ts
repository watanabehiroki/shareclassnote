import {Component, OnInit} from '@angular/core';
import {LocalStrageService} from "../../service/local_strage/local-strage.service";
import { HttpclientService} from "../../service/http/httpclient.service";
import {GraphComponent}  from '../graph/graph.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userprofile;
  editflg = false;
  constructor(private httpclient:HttpclientService,private localStrage:LocalStrageService,
              private router:Router) { }

  ngOnInit() {
    if(this.localStrage.getlocalstragevalue()){
      this.router.navigate(['/login']);
    }
    this.httpclient.httpget('/users/getmyprofile?sessionid='+this.localStrage.getsessionid()).subscribe(data => {
      let httpdata;
      httpdata = data;
      if(httpdata.result == 'success'){
        this.userprofile = httpdata.datas;
      }
      console.log(this.userprofile);
    });
  }

  editclick(){
    this.editflg = true;
  }
  editendflg(){
    this.editflg = false;
  }

}
