import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LocalStrageService } from "../../../service/local_strage/local-strage.service";
import { HttpclientService } from "../../../service/http/httpclient.service";
import { StragedataService } from "../../../service/stragedata/stragedata.service";
import { ChangemysqldateService } from "../../../service/changedate/changemysqldate.service";

@Component({
  selector: 'app-manegementnote',
  templateUrl: './manegementnote.component.html',
  styleUrls: ['./manegementnote.component.css']
})
export class ManegementnoteComponent implements OnInit {
  noteobj:any;
  subjectlist:any;
  timelist:any;


  constructor(private router:Router,private Httpclient:HttpclientService,private localStrage: LocalStrageService,
              private stragedata:StragedataService, private changedate:ChangemysqldateService) { }

  ngOnInit() {
    if(this.localStrage.getlocalstragevalue()){
      this.router.navigate(['/login']);
    }
    if(!this.stragedata.noteobjflg()){
      this.router.navigate(['/managenotelist']);
    }
    // 教科一覧取得
    this.Httpclient.httpget('/subject/getallsubject').subscribe(data=>{
      let httpreq;
      httpreq = data;
      if(httpreq.length > 0){
        this.subjectlist = httpreq;
      }
    });
    // 時間取得
    this.Httpclient.httpget('/time/getalltime').subscribe(data =>{
      let reqdata;
      reqdata = data;
      if(reqdata.datas.length >0 ){
        this.timelist = reqdata.datas;
      }

    });
    this.noteobj = this.stragedata.getnoteobj();
    this.noteobj.lessonday = this.Changedatesql(this.noteobj.lessonday);
    this.noteobj["base64picturepre"]=this.noteobj.base64picture;
  }
  clickedit(){
    var httpbody= this.noteobj
    if(this.noteobj.base64picture == this.noteobj.base64picturepre) {
      httpbody.base64picture = '';
      httpbody.base64picturepre = '';
    }else{
      httpbody.base64picturepre = '';
    }
    httpbody['sessionid'] = this.localStrage.getsessionid();
    this.Httpclient.httppost('/note/updatenote',httpbody).subscribe(data =>{
      let httpdata;
      httpdata= data;
      if(httpdata.result == 'success'){
        this.router.navigate(['/managenotelist']);
      }
    });

  }
  clickreturn(){
    this.stragedata.removenoteobj();
    this.router.navigate(['/managenotelist']);
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
        this.noteobj.base64picture = myReader.result;
      }
      myReader.readAsDataURL(file);
    }
  }


  private Changedatesql(date){
    return this.changedate.inputtodate(date);
  }

}
