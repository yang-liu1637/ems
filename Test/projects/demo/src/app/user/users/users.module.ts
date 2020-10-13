import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './users.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LogNavModule} from '../../shared/navbar/log-nav/log-nav.module';


const route: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  declarations: [UsersComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forChild(route),
        LogNavModule,
        FormsModule

    ]
})
export class UsersModule { }
