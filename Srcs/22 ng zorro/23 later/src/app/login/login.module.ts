import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NavbarModule} from '../shared/navbar/navbar.module';


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
    RouterModule.forChild(route),
    NavbarModule,

  ],
  entryComponents: [],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
