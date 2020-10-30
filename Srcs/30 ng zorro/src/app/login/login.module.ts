import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzAlertModule} from 'ng-zorro-antd/alert';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzCommentModule} from 'ng-zorro-antd/comment';
import {NzAvatarModule} from 'ng-zorro-antd/avatar';
import {NzInputModule} from 'ng-zorro-antd/input';



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
    NzCheckboxModule,
    NzGridModule,
    FormsModule,
    NzButtonModule,
    NzPopconfirmModule,
    NzIconModule,
    NzListModule,
    NzCommentModule,
    NzAvatarModule,
    NzInputModule,
  ],
  entryComponents: [],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
