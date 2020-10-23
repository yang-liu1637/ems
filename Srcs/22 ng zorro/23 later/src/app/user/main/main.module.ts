import {MainComponent} from './main.component';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {LogNavModule } from '../../shared/navbar/log-nav/log-nav.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzSliderModule} from 'ng-zorro-antd/slider';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {NzListModule} from 'ng-zorro-antd/list';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzDatePickerModule, NzRangePickerComponent} from 'ng-zorro-antd/date-picker';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzCarouselModule} from 'ng-zorro-antd/carousel';
import {NzMessageService} from 'ng-zorro-antd/message';



const route: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(route),
    LogNavModule,
    NzLayoutModule,
    NzSliderModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzDrawerModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzTagModule,
    NzListModule,
    NzSelectModule,
    NzDatePickerModule,
    NzIconModule,
    NzCarouselModule
  ],
  exports: [
    MainComponent
  ],
  providers: [NzMessageService],
})
export class MainModule { }

