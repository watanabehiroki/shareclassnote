import { Component, OnInit } from '@angular/core';
import { LocalStrageService} from "../../../service/local_strage/local-strage.service";
import {Router} from "@angular/router";
import {StragedataService} from "../../../service/stragedata/stragedata.service";
import {HttpclientService} from "../../../service/http/httpclient.service";

@Component({
  selector: 'app-addgroup',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.css']
})
export class AddgroupComponent implements OnInit {
  groupdata;
  constructor(private router:Router,private localStrage:LocalStrageService,
               private stragedata: StragedataService, private httpservice:HttpclientService) { }

  ngOnInit() {
    let httpjson;
    let qrcodedata = this.stragedata.getgroupqrcode();
    if(this.localStrage.getlocalstragevalue()){
      this.router.navigate(['/login']);
    }
    if(!this.stragedata.qrdataconfirmflg()){
      this.router.navigate(['/groupoperation']);
    }
    httpjson = {
      clientsession: this.localStrage.getsessionid(),
      groupname: qrcodedata.groupname,
      adminemail: qrcodedata.adminemail,
      passphrase: qrcodedata.passphrase
    }
    var resultdata;
    console.log(httpjson);
    this.httpservice.httppost('/group/findgroupclient',httpjson).subscribe(datas =>{
      console.log(datas);
       resultdata = datas;
      if(resultdata.result ==="success"){
        this.groupdata = resultdata.datas;
      }
    });
  }

}
