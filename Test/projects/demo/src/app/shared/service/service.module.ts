import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginUsersService} from '../../login/service/loginUsers.service';
import {LoginUser} from '../../login/models/loginUser.model';
import {CommonService} from './common.service';
import {DoUsersService} from './doUsers.service';
import {MainUsersService} from './mainUsers.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    LoginUsersService,
    LoginUser,
    CommonService,
    DoUsersService,
    MainUsersService
  ]
})
export class ServiceModule { }