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
    adminemail:'',
    groupname:'',
    subjectid:'',
    releaseflg: false,
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
    const grouplist = this.bodyobj.group.split('|');
   if(grouplist.length == 2){
     this.bodyobj.groupname = grouplist[0];
     this.bodyobj.adminemail = grouplist[1];
   }
   this.httpclient.httppost('/note/clientsubmitnote',this.bodyobj).subscribe(data => {
       let httpdata:any = data;
       if(httpdata.result == 'success'){

         this.registrationdata = '登録完了しました。';
         this.resetreqdata();
       }else{
         this.registrationdata = '登録することができませんでした';
       }
   });
  }
  private resetreqdata (){
    this.bodyobj = {
      adminemail:'',
      groupname:'',
      subjectid:'',
      releaseflg:false,
      group:'',
      year: '',
      base64picture:undefined,
      timeid:'',
      sessionid: this.localstrage.getsessionid(),
    }
  }
  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    if(file.type == 'image/jpeg'|| file.type == 'image/png') {
      var myReader: FileReader = new FileReader();
      //リサイズ処理を記述する
      myReader.onloadend = (e) => {
        this.bodyobj.base64picture = myReader.result;
      }
      myReader.readAsDataURL(file);
    }
  }
}
