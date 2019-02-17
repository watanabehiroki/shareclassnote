import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { ModalDirective } from "ngx-bootstrap";
import { HttpclientService } from "../../../service/http/httpclient.service";
import { LocalStrageService } from "../../../service/local_strage/local-strage.service";

@Component({
  selector: 'app-managedelnotedialog',
  templateUrl: './managedelnotedialog.component.html',
  styleUrls: ['./managedelnotedialog.component.css']
})
export class ManagedelnotedialogComponent {
@ViewChild('noteModal')modalRef:ModalDirective;
@Input() dialogData;
@Output() clickCloseButton = new EventEmitter<any>();
  notelist: any='';
  constructor(private http:HttpclientService,private localStrage:LocalStrageService) { }
  openDialog(noteobj){
    console.log(noteobj);
    this.notelist = noteobj;
    this.modalRef.show();
    console.log(this.notelist);
  }
  clickdel(){
    var httpdata = {
      sessionid:this.localStrage.getsessionid(),
      noteid:this.notelist.noteid
    }
    this.http.httppost('/note/clientnotedel',httpdata).subscribe((datas:any)=>{
      var result=false;
      if(datas.result == 'success'){
        result =true;
      }
      this.modalRef.hide();
      this.clickCloseButton.emit({result:result});

    });
  }

}
