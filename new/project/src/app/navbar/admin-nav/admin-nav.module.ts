import {AdminNavComponent} from './admin-nav.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AdminComponent} from '../../admin/admin.component';
import {AddComponent} from '../../admin/add/add.component';
import {DoUsersService} from '../../service/doUsers.service';


const route: Routes = [{ path: 'admin', component: AdminComponent }, { path: '/admin/add', component: AddComponent }];
@NgModule({
  declarations: [AdminNavComponent],
  exports: [
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(route),
  ],
  providers: [DoUsersService]
})
export class AdminNavModule {

}
