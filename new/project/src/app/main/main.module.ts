import {DoUsersService} from '../service/doUsers.service';
import {ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {LoginUsersService} from '../service/loginUsers.service';
import {LogNavModule} from '../navbar/log-nav/log-nav.module';



const route: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    LogNavModule,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

