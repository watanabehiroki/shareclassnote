import { Component,ViewChild,Input,Output,EventEmitter } from '@angular/core';
import {ModalDirective} from "ngx-bootstrap";
@Component({
  selector: 'app-notedialog',
  templateUrl: './notedialog.component.html',
  styleUrls: ['./notedialog.component.css']
})
export class NotedialogComponent {

  @ViewChild('lgModal')modalRef:ModalDirective;
  @Input() dialogData;
  @Output() clickCloseButton = new EventEmitter<any>();

  noteobj:any='';
  constructor() { }
  openDialog(){
    this.noteobj = this.dialogData;
    this.modalRef.show();
  }

}
