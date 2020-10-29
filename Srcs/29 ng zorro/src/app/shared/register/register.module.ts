import {DoUsersService} from '../service/doUsers.service';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AdminNavModule } from '../navbar/admin-nav/admin-nav.module';
import {NzFormModule} from 'ng-zorro-antd/form';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NavbarModule} from '../navbar/navbar.module';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzIconModule} from 'ng-zorro-antd/icon';

const route: Routes = [{ path: 'register', component: RegisterComponent }];

@NgModule({
  declarations: [RegisterComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(route),
        AdminNavModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzButtonModule,
        NavbarModule,
        NzCheckboxModule,
        FormsModule,
        NzRadioModule,
        NzIconModule
    ],
  exports: [
    RegisterComponent
  ],
  providers: [DoUsersService]
})
export class RegisterModule { }
