import {Component, OnInit} from '@angular/core';
import {LocalStrageService} from "../../service/local_strage/local-strage.service";
import { HttpclientService} from "../../service/http/httpclient.service";
import {GraphComponent}  from '../graph/graph.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  userprofile;
  editprofile;
  editflg = false;
  constructor(private httpclient:HttpclientService,private localStrage:LocalStrageService,
              private router:Router) { }

  ngOnInit() {
    if(this.localStrage.getlocalstragevalue()){
      this.router.navigate(['/login']);
    }
    this.httpclient.httpget('/users/getmyprofile?sessionid='+this.localStrage.getsessionid()).subscribe(data => {
      let httpdata;
      httpdata = data;
      if(httpdata.result == 'success'){
        this.userprofile = httpdata.datas;
      }
      console.log(this.userprofile);
    });
  }
  editcancel(){
    this.editflg = false;
  }
  editclick(){
    this.editprofile = this.userprofile;
    this.editflg = true;
  }
  editendflg(){
    this.editprofile[0].sessionid = this.localStrage.getsessionid();
    console.log(this.editprofile);
    this.httpclient.httppost('/users/clienteditprofile',this.editprofile[0]).subscribe(data=>{
      var httpdata:any = data;
      if(httpdata.result == 'success'){
        this.httpclient.httpget('/users/getmyprofile?sessionid='+this.localStrage.getsessionid()).subscribe(profiledata => {
          console.log(httpdata);
          httpdata = profiledata;
          console.log(httpdata.result);
          if(httpdata.result == 'success'){
            this.userprofile = httpdata.datas;
          }
        });
        this.editflg = false;
      }else{

      }

    });
  }
  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    if(file.type == 'image/jpeg'|| file.type == 'image/png') {
      var myReader: FileReader = new FileReader();
      //リサイズ処理を記述する
      myReader.onloadend = (e) => {
        this.editprofile[0].base64profile = myReader.result;
      }
      myReader.readAsDataURL(file);
    }
  }

}
