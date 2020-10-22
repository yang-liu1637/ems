import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { LogNavModule } from '../../shared/navbar/log-nav/log-nav.module';



const route: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    LogNavModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }

