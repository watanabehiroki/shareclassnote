import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import { LocalStrageService } from '../../service/local_strage/local-strage.service';
import {HttpclientService} from "../../service/http/httpclient.service";
import {NotedialogComponent} from "../dialog/notedialog/notedialog.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("notedialog") notedialogcomponent: NotedialogComponent;
  constructor(private router:Router,private localstrageService:LocalStrageService, private http:HttpclientService) { }
  listnote="";
  listcount = 0;
  ngOnInit() {
    //sessionidが登録されているか確認する
   if(this.localstrageService.getlocalstragevalue()){
      //sessionidが存在しない時
      this.router.navigate(['/login']);
    }
   this.http.httpget('/home/homenote?sessionid='+this.localstrageService.getsessionid()).subscribe((data:any)=>{
     if(data.result == 'success'){
       this.listnote = data.datas;
       this.listcount = this.listnote.length;
     }
   });
  }
  dateToString(datestring){
    var resultdata = datestring.split('T');
    resultdata = resultdata[0].split('-');
    return resultdata[0]+'年'+resultdata[1]+'月'+resultdata[2]+'日';
  }
  openNoteDialog(){
    this.notedialogcomponent.openDialog();
  }
}


