import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from "@angular/router";
import { LocalStrageService } from "../../../service/local_strage/local-strage.service";
import { HttpclientService} from "../../../service/http/httpclient.service";
import { Changebase64Service } from "../../../service/base64/changebase64.service";
import { ChangemysqldateService } from "../../../service/changedate/changemysqldate.service";
import { StragedataService } from "../../../service/stragedata/stragedata.service";
import { ManagedelnotedialogComponent } from "../../dialog/managedelnotedialog/managedelnotedialog.component";

@Component({
  selector: 'app-manegementnotelist',
  templateUrl: './manegementnotelist.component.html',
  styleUrls: ['./manegementnotelist.component.css']
})
export class ManegementnotelistComponent implements OnInit {
  @ViewChild("managedialog") managedeldialog: ManagedelnotedialogComponent;
  listnotedata: any;
  constructor(private localStrage:LocalStrageService,
              private router:Router,private httpservice:HttpclientService
              ,private changebase64:Changebase64Service, private changemysql: ChangemysqldateService,
              private stragedata:StragedataService) { }

  ngOnInit() {
    if (this.localStrage.getlocalstragevalue()) {
      this.router.navigate(['login']);
    }
    this.httpservice.httpget('/note/clientallsubmitnote?sessionid=' + this.localStrage.getsessionid())
      .subscribe(data => {
        let httpdata: any = data;
        if (httpdata.result == 'success') {
          this.listnotedata = httpdata.datas;
          console.log(this.listnotedata);
        }
      });
  }

  opemanagenDialog(noteobj){
   this.managedeldialog.openDialog(noteobj);
  }
  clickdetail(Noteobject){
    this.stragedata.setnoteobj(Noteobject);
    this.router.navigate(['/manegementnote']);
  }
  changedate(date){//dateはjsonで受け取った文字列
    return this.changemysql.tostringdate(date);
  }
  getDialogData(e){
    console.log(e);
    if(e.result == true){
      this.httpservice.httpget('/note/clientallsubmitnote?sessionid=' + this.localStrage.getsessionid())
        .subscribe(data => {
          let httpdata: any = data;
          if (httpdata.result == 'success') {
            this.listnotedata = httpdata.datas;
          }
        });
    }
  }
}
