import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStrageService} from '../../../service/local_strage/local-strage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, private localstrage: LocalStrageService ) { }

  ngOnInit() {
  }
  logoutclick() {
    this.localstrage.removelocalStrage();
    this.router.navigate(['/login']);
  }

}
