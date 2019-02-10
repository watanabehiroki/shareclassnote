import {Component, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import { ModalDirective} from "ngx-bootstrap";
import { HttpclientService} from "../../../service/http/httpclient.service";
import { LocalStrageService } from "../../../service/local_strage/local-strage.service";

@Component({
  selector: 'app-managenotedelete',
  templateUrl: './managenotedelete.component.html',
  styleUrls: ['./managenotedelete.component.css']
})
export class ManagenotedeleteComponent {
  @ViewChild('lgModel')modalRef:ModalDirective;
  @Input() dialogData;
  @Output() clickCloseButton = new EventEmitter<any>();
  noteobj:any = '';
  httpbody={
    sessionid:'',
    noteid:'',
  }
  constructor(private httpservice:HttpclientService,private localStrage:LocalStrageService ) { }

  openDialog(){
    this.noteobj = this.dialogData;
    this.modalRef.show();
  }
  clickdel(){
    this.httpbody.sessionid  = this.localStrage.getsessionid();
    //this.httpservice.httppost()
    this.modalRef.hide();
  }

}
