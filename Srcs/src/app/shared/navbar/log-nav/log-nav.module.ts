import {LogNavComponent} from './log-nav.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';


const route: Routes = [];

@NgModule({
  declarations: [LogNavComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(route),
    NzMenuModule,
    NzGridModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ],
  exports: [
    LogNavComponent
  ]
})
export class LogNavModule {

}


