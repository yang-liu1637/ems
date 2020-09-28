import {NgModule} from '@angular/core';
import {ShowComponent} from './show.component';
import {DoUsersService} from '../service/doUsers.service';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonService} from '../service/common.service';
import {NavbarModule} from '../navbar/navbar.module';
import {LoginUsersService} from '../service/loginUsers.service';
import {LoginUser} from '../service/models/loginUser.model';
import {RegisterModule} from '../register/register.module';


const route: Routes = [{ path: '', component: ShowComponent }];

@NgModule({
  declarations: [ShowComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    NavbarModule,
    RegisterModule,
  ],
  providers: [
    HttpClient,
    LoginUsersService,
    LoginUser,
    CommonService,
    DoUsersService
  ]
})
export class ShowModule { }
