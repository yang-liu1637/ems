import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from '../admin.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../navbar/admin-nav/admin-nav.module';
import {LoginUsersService} from '../../service/loginUsers.service';
import {ListComponent} from './list.component';
import {LoginUser} from '../../service/models/loginUser.model';
import {CommonService} from '../../service/common.service';
import {DoUsersService} from '../../service/doUsers.service';

const route: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    AdminNavModule,

  ],
  providers: [
    DoUsersService,
    LoginUsersService
  ]
})

export class ListModule { }
