import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgQrScannerModule} from "angular2-qrscanner";

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddgroupComponent } from './component/group/addgroup/addgroup.component';
import { SubmitnoteComponent } from './component/note/submitnote/submitnote.component';
import { SelectnoteoperationComponent } from './component/note/selectnoteoperation/selectnoteoperation.component';
import { SelectsubjectComponent } from './component/note/selectsubject/selectsubject.component';
import { DetailnoteComponent } from './component/note/detailnote/detailnote.component';
import { FooterComponent } from './component/headerfooter/footer/footer.component';
import { HeaderComponent } from './component/headerfooter/header/header.component';
import { PubnotelistComponent } from './component/note/pubnotelist/pubnotelist.component';
import { UserprofileComponent } from './component/userprofile/userprofile.component';
import { GroupreadqrcodeComponent } from './component/group/groupreadqrcode/groupreadqrcode.component';
import { GroupoperationComponent } from './component/group/groupoperation/groupoperation.component';



import { HttpclientService } from './service/http/httpclient.service';
import { LocalStrageService} from "./service/local_strage/local-strage.service";
import {StragedataService} from "./service/stragedata/stragedata.service";
import { GroupaddlistComponent } from './component/group/groupaddlist/groupaddlist.component';
import { Changebase64Service } from "./service/base64/changebase64.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddgroupComponent,
    SubmitnoteComponent,
    SelectnoteoperationComponent,
    SelectsubjectComponent,
    DetailnoteComponent,
    FooterComponent,
    HeaderComponent,
    PubnotelistComponent,
    UserprofileComponent,
    GroupreadqrcodeComponent,
    GroupoperationComponent,
    GroupaddlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgQrScannerModule
  ],
  providers: [
    HttpclientService,
    LocalStrageService,
    StragedataService,
    Changebase64Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
