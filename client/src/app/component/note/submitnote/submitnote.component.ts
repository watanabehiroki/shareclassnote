import { Component, OnInit } from '@angular/core';
import { LocalStrageService } from "../../../service/local_strage/local-strage.service";
import { HttpclientService } from "../../../service/http/httpclient.service";
import { Changebase64Service } from "../../../service/base64/changebase64.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-submitnote',
  templateUrl: './submitnote.component.html',
  styleUrls: ['./submitnote.component.css']
})
export class SubmitnoteComponent implements OnInit {
  bodyobj = {
    subject:'',
    releaseflg:false,
    group:'',
    year: '',
    base64picture:undefined,
    timeid:'',
    sessionid: this.localstrage.getsessionid(),
  }
  listsubject;
  grouplist;
  timelist;
  registrationdata='';
  constructor(private localstrage:LocalStrageService,
              private httpclient:HttpclientService,
              private router:Router,
              private changedata:Changebase64Service) { }

  ngOnInit() {
    var httpresdata;
    if(this.localstrage.getlocalstragevalue()){
      this.router.navigate(['login']);
    }
    this.httpclient.httpget('/subject/getallsubject').subscribe( datas => {
       httpresdata = datas;
       if(httpresdata.result !== 'err'){
         this.listsubject = httpresdata;
       }
    });
    this.httpclient.httpget('/group/getclientallgroup?sessionid='+this.localstrage.getsessionid())
      .subscribe(datas =>{
        httpresdata = datas;
        if(httpresdata.result === 'success'){
          this.grouplist = httpresdata.groupdatas;
        }
    });
    this.httpclient.httpget('/time/getalltime').subscribe(datas => {
      httpresdata = datas;
      if(httpresdata.result === 'success'){
        this.timelist = httpresdata.datas;
      }
    });
  }
  clicksubmitnote(){
    this.httpclient.httppost('/note/clientusbmitnote',this.bodyobj).subscribe(data => {

    });
  }
  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.bodyobj.base64picture = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
}
