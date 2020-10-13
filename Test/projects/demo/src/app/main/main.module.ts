import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { SwiperComponent } from '../swiper/swiper.component';
import { LogNavModule } from '../navbar/log-nav/log-nav.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';



const route: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent, SwiperComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    ReactiveFormsModule,
    FormsModule,
    LogNavModule,
    NgxUsefulSwiperModule
  ],
  exports: [
    MainComponent,
    SwiperComponent
  ]
})
export class MainModule { }

