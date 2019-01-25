import { Component, OnInit } from '@angular/core';
import { LocalStrageService } from '../../../service/local_strage/local-strage.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              private localStrageSrtvice:LocalStrageService) { }

  ngOnInit() {
  }
  logoutclick(){
    this.localStrageSrtvice.removelocalstrage();
    this.router.navigate(['login']);
  }
}
