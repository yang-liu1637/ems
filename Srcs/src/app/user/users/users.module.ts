import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LogNavModule } from '../../shared/navbar/log-nav/log-nav.module';
import {NzTimePickerModule} from 'ng-zorro-antd/time-picker';


const route: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  declarations: [UsersComponent],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    LogNavModule,
    NzTimePickerModule,
    FormsModule,

  ]
})
export class UsersModule { }
