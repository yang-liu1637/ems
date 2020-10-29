import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UpdateComponent} from './update.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule} from '@angular/forms';
import {NzPopconfirmModule} from 'ng-zorro-antd/popconfirm';


const route: Routes = [{ path: '', component: UpdateComponent }];

@NgModule({
  declarations: [UpdateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    NzButtonModule,
    NzTableModule,
    NzInputModule,
    FormsModule,
    NzPopconfirmModule,
  ]
})

export class UpdateModule {       }
