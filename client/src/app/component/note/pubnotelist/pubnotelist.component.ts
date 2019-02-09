import {Component, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import {HttpclientService} from "../../../service/http/httpclient.service";
import {LocalStrageService} from "../../../service/local_strage/local-strage.service";
import {NotedialogComponent} from "../../dialog/notedialog/notedialog.component";

@Component({
  selector: 'app-pubnotelist',
  templateUrl: './pubnotelist.component.html',
  styleUrls: ['./pubnotelist.component.css']
})
export class PubnotelistComponent implements OnInit {
  @ViewChild("notedialog") notedialogcomponent: NotedialogComponent;
  notelist;
  subjectid;
  constructor(private activatedRouter: ActivatedRoute,private httpservice:HttpclientService,private localStrage:LocalStrageService) { }

  ngOnInit() {
    this.activatedRouter.paramMap.subscribe((params:ParamMap)=>{
      this.subjectid = params.get('subjectid');
    });
    this.httpservice.httpget('/note/clientselectsubjectnote/lessonday/1?sessionid='+
      this.localStrage.getsessionid()+'&subjectid='+this.subjectid).subscribe(data => {
        var sqldata:any = data;
        if(sqldata.result = 'success'){
          this.notelist = sqldata.datas;
        }
    });
  }
  openNoteDialog(){
    this.notedialogcomponent.openDialog();
  }
}
