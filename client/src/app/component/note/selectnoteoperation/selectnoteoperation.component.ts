import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStrageService} from '../../../service/local_strage/local-strage.service';
@Component({
  selector: 'app-selectnoteoperation',
  templateUrl: './selectnoteoperation.component.html',
  styleUrls: ['./selectnoteoperation.component.css']
})
export class SelectnoteoperationComponent implements OnInit {

  constructor(private router:Router,private localstrageService:LocalStrageService) { }

  ngOnInit() {
    if(this.localstrageService.getlocalstragevalue()){
      this.router.navigate(['login']);
    }else{

    }
  }
  looknoteclick(){
    this.router.navigate(['selectsubject']);

  }
  submitnoteclick(){
    this.router.navigate(['submitnote']);
  }
  manegementnoteclick(){
    this.router.navigate(['managenotelist']);
  }
}
