import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from  './component/login/login.component';
import { SelectnoteoperationComponent } from './component/note/selectnoteoperation/selectnoteoperation.component';

import { SelectsubjectComponent } from './component/note/selectsubject/selectsubject.component';
import { UserprofileComponent } from "./component/userprofile/userprofile.component";
//ノートに関するcomponent
import { SubmitnoteComponent } from './component/note/submitnote/submitnote.component';
import { DetailnoteComponent } from './component/note/detailnote/detailnote.component';
import { PubnotelistComponent } from './component/note/pubnotelist/pubnotelist.component';
import { ManegementnotelistComponent } from "./component/note/manegementnotelist/manegementnotelist.component";
import { ManegementnoteComponent} from "./component/note/manegementnote/manegementnote.component";
//グループに関するcomponent
import { GroupreadqrcodeComponent } from "./component/group/groupreadqrcode/groupreadqrcode.component";
import { GroupoperationComponent } from "./component/group/groupoperation/groupoperation.component";
import { AddgroupComponent} from "./component/group/addgroup/addgroup.component";
import { GroupaddlistComponent} from "./component/group/groupaddlist/groupaddlist.component";

const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'submitnote', component: SubmitnoteComponent},
  {path: 'selectsubject', component: SelectsubjectComponent},
  {path: 'selectnoteope', component: SelectnoteoperationComponent},
  {path: 'detailnote',  component: DetailnoteComponent},
  {path: 'pubnotelist/:subjectid',component: PubnotelistComponent},
  {path: 'managenotelist',component: ManegementnotelistComponent},
  {path: 'manegementnote',component: ManegementnoteComponent},
  {path: 'userprofile', component: UserprofileComponent},
  {path: 'groupadqrcode', component: GroupreadqrcodeComponent},
  {path: 'groupoperation', component: GroupoperationComponent},
  {path: 'groupadd',component: AddgroupComponent},
  {path: 'groupaddlist',component: GroupaddlistComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
