import {LogNavComponent} from './log-nav.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from '../../users/users.component';
import {MainComponent} from '../../main/main.component';


const route: Routes = [ { path: 'users', component: UsersComponent }, { path: 'main', component: MainComponent }];

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


