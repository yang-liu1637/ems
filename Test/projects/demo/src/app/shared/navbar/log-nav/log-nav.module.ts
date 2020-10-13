import {LogNavComponent} from './log-nav.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


const route: Routes = [];

@NgModule({
  declarations: [LogNavComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
  ],
  exports: [
    LogNavComponent
  ]
})
export class LogNavModule {

}


