import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-selectnoteoperation',
  templateUrl: './selectnoteoperation.component.html',
  styleUrls: ['./selectnoteoperation.component.css']
})
export class SelectnoteoperationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  looknoteclick(){
    this.router.navigate(['selectsubject']);

  }
  submitnoteclick(){
    this.router.navigate(['submitnote']);
  }

}
