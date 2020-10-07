import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {MainUsersService} from '../service/mainUsers.service';
import {Subject} from 'rxjs';
import {Common} from '../service/commons/common';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private searchTerms = new Subject<string>();
  res = false;
  constructor(private common: Common, private users: MainUsersService) { }
  @Input() showMs = false;
  showView: EventEmitter<string> = new EventEmitter();
  public treeUrl: any = this.common.setUrl('');
  public searchInput = '';
  collection: any = [];
  search(searchParam: string): void {
    this.searchTerms.next(searchParam);
  }
  ngOnInit(): void {
    this.users.getList().subscribe((result) => {
      // 订阅server里面的list
      this.collection = result;
    });
    this.searchTerms
      .pipe(
        // 请求防抖 300毫秒
        debounceTime(300),
        distinctUntilChanged())
      .subscribe(() => {// 后续操作
        this.treeUrl = this.common.setUrl('https://www.baidu.com/s?wd=' + this.searchInput);
        this.showView.emit(this.searchInput);
        document.getElementById('hh').style.height = '600px';
      });
  }
}

