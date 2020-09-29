import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginUsersService} from '../service/loginUsers.service';
import {CommonService} from '../service/common.service';
import {LogNavModule} from '../navbar/log-nav/log-nav.module';
import {LoginUser} from '../service/models/loginUser.model';
import {DoUsersService} from '../service/doUsers.service';


const route: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    LogNavModule,
  ]
})
export class UsersModule { }
