import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AdminNavModule} from '../../shared/navbar/admin-nav/admin-nav.module';
import {ListComponent} from './list.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {FormsModule} from '@angular/forms';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';
import {AppModule} from '../../app.module';

const route: Routes = [{ path: '', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  exports: [
    ListComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(route),
        AdminNavModule,
        NzLayoutModule,
        NzTableModule,
        NzIconModule,
        FormsModule,
        NzInputModule,
        NzWaveModule,
        NzButtonModule,
        NzDropDownModule,
        NzPopconfirmModule,
        AppModule

    ]
})

export class ListModule { }
