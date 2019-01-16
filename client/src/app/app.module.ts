import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddgroupComponent } from './component/addgroup/addgroup.component';
import { SubmitnoteComponent } from './component/note/submitnote/submitnote.component';
import { SelectnoteoperationComponent } from './component/note/selectnoteoperation/selectnoteoperation.component';
import { SelectsubjectComponent } from './component/note/selectsubject/selectsubject.component';
import { DetailnoteComponent } from './component/note/detailnote/detailnote.component';
import { FooterComponent } from './component/headerfooter/footer/footer.component';
import { HeaderComponent } from './component/headerfooter/header/header.component';
import { PubnotelistComponent } from './component/note/pubnotelist/pubnotelist.component';
import { HttpclientService } from './service/httpclient.service';


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
    PubnotelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpclientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
