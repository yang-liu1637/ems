import {DoUsersService} from '../service/doUsers.service';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

const route: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
