import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginUsersService} from './loginUsers.service';
import {LoginUser} from '../../login/loginUser.model';
import {SendmessageService} from './sendmessage.service';
import {DoUsersService} from './doUsers.service';
import {MainUsersService} from './mainUsers.service';
import {TestService} from './test.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    LoginUsersService,
    LoginUser,
    SendmessageService,
    DoUsersService,
    MainUsersService,
    TestService
  ]
})
export class ServiceModule { }
