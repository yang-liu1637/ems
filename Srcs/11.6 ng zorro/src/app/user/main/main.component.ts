import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import {MainUsersService} from '../../shared/service/mainUsers.service';
import {TestService} from '../../shared/service/test.service';




const count = 5;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isCollapsed = false;
  visible = false;
  imgList = [ // 轮播图
    'assets/images/img1.jpg',
    'assets/images/img1.jpg',
    'assets/images/img1.jpg',
    'assets/images/img1.jpg',
    'assets/images/img1.jpg',
    'assets/images/img1.jpg',
    'assets/images/img1.jpg'
  ];
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{
    title: any;
    images: any;
    id: any;
    zan: any;
    name: any }> = [];
  loading: boolean;
  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }


  constructor(private http: HttpClient, private msg: NzMessageService, private users: MainUsersService, private load: TestService) {}

  ngOnInit(): void {
    this.users.getList().subscribe((result) => {
      this.getData(res => {
        this.list = res;
        this.data = res;
        this.initLoading = false;
        console.log(this.list);
      });
    });
  }

  getData(callback: (res: any) => void): void {
    this.users.getList().subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.load.getList().subscribe((res: any) => {
      this.data = this.data.concat(res.results);
      this.list = [...this.data];
      this.loadingMore = false;
      console.log(this.list);
    });
  }

  deleteUsers(item): void {
   /* this.list.splice(item - 1, 1);*/
    this.users.deleteUsers(item).subscribe((result) => {
      console.log(result);
    });
  }
}
