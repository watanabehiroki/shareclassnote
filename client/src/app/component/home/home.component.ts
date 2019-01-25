import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { LocalStrageService } from '../../service/local_strage/local-strage.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private localstrageService:LocalStrageService) { }

  ngOnInit() {
    //sessionidが登録されているか確認する
   if(this.localstrageService.getsessionid() === undefined){
      //sessionidが存在しない時
      this.router.navigate(['/login']);
    }
  }

}
