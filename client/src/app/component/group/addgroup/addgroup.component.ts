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
  httpreqresponce='';
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
    this.httpservice.httppost('/group/findgroupclient',httpjson).subscribe(datas =>{
      console.log(datas);
       resultdata = datas;
      if(resultdata.result ==="success"){
        this.groupdata = resultdata.datas;
      }
    });
  }
  returnpage(){
    this.router.navigate(['/groupoperation']);
  }
  registretionclick(){
    let bodyobj ={
      clientsessionid:this.localStrage.getsessionid(),
      groupname: this.groupdata.groupname,
      adminemail: this.groupdata.adminemail,
      passphrase: this.groupdata.qcode,
    }
    this.httpservice.httppost('/group/qraddgroupclient',bodyobj).subscribe(data=>{
      let httpresponce;
      httpresponce = data;
      console.log(httpresponce);
      if(httpresponce.result === 'success' && httpresponce.addresult === true){
        this.router.navigate(['/']);
      }else if(httpresponce.result === 'success' && httpresponce.addresult === false){
        this.httpreqresponce = '既に登録されています.';
      }
    });
  }
  dateformat(dateline){//YY-MM-DDThhとする 年月日とする
    var result = "";
    var  preformat = dateline.split('T');
    var preformatlist;
    preformat = preformat[0];
    preformatlist = preformat.split('-');
    result = preformatlist[0]+'年'+preformatlist[1]+'月'+preformatlist[2]+'日';
    return result;
  }

}
