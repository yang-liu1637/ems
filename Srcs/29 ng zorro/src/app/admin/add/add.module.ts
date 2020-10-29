import {forwardRef, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';


import { AddComponent } from './add.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../shared/navbar/admin-nav/admin-nav.module';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzRadioModule} from 'ng-zorro-antd/radio';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {RegisterModule} from '../../shared/register/register.module';
const route: Routes = [{ path: '', component: AddComponent }];

@NgModule({
  declarations: [AddComponent],

    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(route),
        AdminNavModule,
        NzFormModule,
        ReactiveFormsModule,
        NzInputModule,
        NzIconModule,
        NzRadioModule,
        NzButtonModule,
        RegisterModule

    ]
})
export class AddModule { }
