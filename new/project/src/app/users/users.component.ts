import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public subject = new Subject();
  private searchTerms = new Subject<string>();
  res = false;

  search(serachParam: string): void {
    this.searchTerms.next(serachParam);
  }
    ngOnInit(): void {
      this.subject.pipe(debounceTime(500)).subscribe(() => { // 请求防抖 500毫秒
          console.log(11); // 防抖成功 控制台返回11
        }
      );
      this.searchTerms
        .pipe(
          // 请求防抖 300毫秒
          debounceTime(300),
          distinctUntilChanged())
        .subscribe(() => {// 后续操作
          this.res = true;
          console.log(this.res); // 用户输入有效控制台刷新res为true的次数
        });
    }
  public demo(): void { // 单击demo 控制台返回22 若单击有效 则返回subject11
    console.log(22);
    this.subject.next();
  }

}
