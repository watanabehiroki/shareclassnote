import { Component, OnInit } from '@angular/core';
import {HttpclientService} from "../../../service/http/httpclient.service";
import {LocalStrageService} from "../../../service/local_strage/local-strage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-groupaddlist',
  templateUrl: './groupaddlist.component.html',
  styleUrls: ['./groupaddlist.component.css']
})
export class GroupaddlistComponent implements OnInit {
  listgroupdata
  constructor(private httpservice: HttpclientService, private locastrage: LocalStrageService,
              private router:Router) { }
  ngOnInit() {
    if(this.locastrage.getlocalstragevalue()){
      this.router.navigate(['/login']);

    }
    this.httpservice.httpget('/group/getclientallgroup?sessionid'+this.locastrage.getsessionid()).subscribe(datas=>{
      console.log(datas);
    });
  }

}
