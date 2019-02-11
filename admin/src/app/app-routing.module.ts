import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './component/user/adduser/addadmin/addadmin.component';
import { AddclientComponent } from './component/user/adduser/addclient/addclient.component';

import { SetsubjectComponent } from './component/subject/setsubject/setsubject.component';
import { ListsubjectComponent } from './component/subject/listsubject/listsubject.component';

import { LoginComponent } from './component/login/login.component';

import { GroupaddComponent } from './component/group/groupadd/groupadd.component';
import { GrouplistComponent } from './component/group/grouplist/grouplist.component';
import { DetailgroupComponent } from './component/group/detailgroup/detailgroup.component';
import { EditsubjectComponent } from './component/subject/editsubject/editsubject.component';
import { GroupaddSuccessComponent } from './component/group/groupadd-success/groupadd-success.component';
import { GroupaddqrcodeComponent} from './component/group/groupaddqrcode/groupaddqrcode.component';
import { GroupnotelistComponent} from './component/note/groupnotelist/groupnotelist.component';
import {GroupnoteoperationComponent} from './component/note/groupnoteoperation/groupnoteoperation.component';

const routes: Routes = [
  {path: '', redirectTo: '/addclient', pathMatch: 'full'},
  {path: 'setsubject', component: SetsubjectComponent},
  {path: 'listsubject', component: ListsubjectComponent},
  {path: 'editsubject/:subjectid', component: EditsubjectComponent},
  {path: 'addadmin', component: AddadminComponent},
  {path: 'addclient', component: AddclientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'groupadd', component: GroupaddComponent},
  {path: 'grouplist', component: GrouplistComponent},
  {path: 'detailgroup', component: DetailgroupComponent},
  {path: 'groupaddsuccess', component: GroupaddSuccessComponent},
  {path: 'groupaddqr', component: GroupaddqrcodeComponent},
  {path: 'groupnoteope', component: GroupnoteoperationComponent},
  {path: 'groupnotelist/:groupname', component: GroupnotelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
