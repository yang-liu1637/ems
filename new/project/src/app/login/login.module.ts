import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {LoginUsersService} from '../service/loginUsers.service';
import {HttpClientModule} from '@angular/common/http';
import {NavbarModule} from '../navbar/navbar.module';


const route: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
     RouterModule.forChild(route),
    NavbarModule,
  ],
  entryComponents: [],
  exports: [
    LoginComponent,
  ],
  providers: [LoginUsersService]
})
export class LoginModule { }
