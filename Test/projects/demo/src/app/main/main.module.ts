import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {LogNavModule} from '../navbar/log-nav/log-nav.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';



const route: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    LogNavModule,
    FormsModule,
    NgxUsefulSwiperModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

