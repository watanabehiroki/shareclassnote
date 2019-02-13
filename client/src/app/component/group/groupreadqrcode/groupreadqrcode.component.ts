import {Component, OnInit, ViewChild} from '@angular/core';
import { QrScannerComponent} from "angular2-qrscanner";
import { Router} from "@angular/router";
import {LocalStrageService} from "../../../service/local_strage/local-strage.service";
import { StragedataService} from "../../../service/stragedata/stragedata.service";

@Component({
  selector: 'app-groupreadqrcode',
  templateUrl: './groupreadqrcode.component.html',
  styleUrls: ['./groupreadqrcode.component.css']
})
export class GroupreadqrcodeComponent implements OnInit {
  count = 0;
  listdevaice=[];
  listcount=0;
  @ViewChild(QrScannerComponent) qrScannerComponent:QrScannerComponent;
  constructor(private localStrage:LocalStrageService,private router: Router,
              private stragedata:StragedataService ) { }
  ngOnInit() {
    if(this.localStrage.getlocalstragevalue()){
      this.router.navigate(['login']);
    }
    this.qrScannerComponent.getMediaDevices().then(devices =>{
      const videoDevices:MediaDeviceInfo[] = [];
      for(const device of devices){
        if(device.kind.toString() === 'videoinput'){
          videoDevices.push(device);
        }
      }
      this.listdevaice = videoDevices;
      this.listcount = this.listdevaice.length;
      this.count = this.listcount-1;
      if(videoDevices.length > 0){
        this.qrScannerComponent.chooseCamera.next(videoDevices[this.count]);
      }
    });
    this.qrScannerComponent.capturedQr.subscribe(result =>{
      console.log(result);
      if(this.stragedata.setgroupqrcode(result)){
        this.router.navigate(['/groupadd']);
      }else{
        this.ngOnInit();
      }

    });
  }
}
