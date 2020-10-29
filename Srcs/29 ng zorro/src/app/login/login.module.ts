import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NzAlertModule} from 'ng-zorro-antd/alert';



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

    ReactiveFormsModule,
    RouterModule.forChild(route),
    NzAlertModule,
  ],
  entryComponents: [],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
