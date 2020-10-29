import {NavbarComponent} from './navbar.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';



const route: Routes = [];
@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(route),
    NzMenuModule,
    NzGridModule,
    NzLayoutModule,
    NzBreadCrumbModule
  ]
})
export class NavbarModule {

}
