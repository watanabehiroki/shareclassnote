import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { LocalStrageService } from "../../../service/local_strage/local-strage.service";
import { HttpclientService} from "../../../service/http/httpclient.service";
import { Changebase64Service } from "../../../service/base64/changebase64.service";
import { ChangemysqldateService } from "../../../service/changedate/changemysqldate.service";

@Component({
  selector: 'app-manegementnotelist',
  templateUrl: './manegementnotelist.component.html',
  styleUrls: ['./manegementnotelist.component.css']
})
export class ManegementnotelistComponent implements OnInit {
  listnotedata;
  constructor(private localStrage:LocalStrageService,
              private router:Router,private httpservice:HttpclientService
              ,private changebase64:Changebase64Service, private changemysql: ChangemysqldateService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['login']);
    }
    this.httpservice.httpget('/note/clientallsubmitnote?sessionid=' + this.localStrage.getsessionid())
      .subscribe(data => {
        let httpdata: any = data;
        if (httpdata.result == 'success') {
          this.listnotedata = httpdata.datas;
        }
      });
  }

  changedate(date){//dateはjsonで受け取った文字列
    return this.changemysql.tostringdate(date);
  }

}
