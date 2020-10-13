import {AdminNavComponent} from './admin-nav.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';


const route: Routes = [];
@NgModule({
  declarations: [AdminNavComponent],
  exports: [
    AdminNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(route),
  ]
})
export class AdminNavModule {

}
