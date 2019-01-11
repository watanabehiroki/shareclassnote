import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-selectsubject',
  templateUrl: './selectsubject.component.html',
  styleUrls: ['./selectsubject.component.css']
})
export class SelectsubjectComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  accesslistnote(subject){
    this.router.navigate(['pubnotelist/'+subject]);
  }

}
