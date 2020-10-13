import {NavbarComponent} from './navbar.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';



const route: Routes = [];
@NgModule({
  declarations: [NavbarComponent],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(route),
  ]
})
export class NavbarModule {

}
