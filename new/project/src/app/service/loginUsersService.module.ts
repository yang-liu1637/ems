import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginUsersService} from './loginUsers.service';
import {LoginUser} from './models/loginUser.model';
import {CommonService} from './common.service';
import {DoUsersService} from './doUsers.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    LoginUsersService,
    LoginUser,
    CommonService,
    DoUsersService
  ]
})
export class LoginUsersServiceModule { }
