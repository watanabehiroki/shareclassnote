import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { NgQrScannerModule} from "angular2-qrscanner";
import { ModalModule } from 'ngx-bootstrap';

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

import {ChangemysqldateService} from "./service/changedate/changemysqldate.service";

import { HttpclientService } from './service/http/httpclient.service';
import { LocalStrageService} from "./service/local_strage/local-strage.service";
import {StragedataService} from "./service/stragedata/stragedata.service";
import { GroupaddlistComponent } from './component/group/groupaddlist/groupaddlist.component';
import { Changebase64Service } from "./service/base64/changebase64.service";
import { ManegementnoteComponent } from './component/note/manegementnote/manegementnote.component';
import { ManegementnotelistComponent } from './component/note/manegementnotelist/manegementnotelist.component';
import { GraphComponent } from './component/graph/graph.component';
import { NotedialogComponent } from './component/dialog/notedialog/notedialog.component';
import { ManagenotedeleteComponent } from './component/dialog/managenotedelete/managenotedelete.component';

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
    GroupaddlistComponent,
    ManegementnoteComponent,
    ManegementnotelistComponent,
    GraphComponent,
    NotedialogComponent,
    ManagenotedeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgQrScannerModule,
    ModalModule.forRoot(),
  ],
  providers: [
    HttpclientService,
    LocalStrageService,
    StragedataService,
    Changebase64Service,
    ChangemysqldateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
