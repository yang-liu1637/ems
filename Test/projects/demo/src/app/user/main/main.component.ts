import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {MainUsersService} from '../../shared/server/mainUsers.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import { SwiperOptions } from 'swiper';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./css/main.component.scss']
})
export class MainComponent implements OnInit {
  private searchTerms = new Subject<string>();
  res = false;
  constructor( private users: MainUsersService, private sanitizer: DomSanitizer) {
  }

  @Input() showMs = false;
  showView: EventEmitter<string> = new EventEmitter();
  public treeUrl: any = this.setUrl('');
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
        debounceTime(300))
      .subscribe(() => {// 后续操作
        this.treeUrl = this.setUrl('https://www.baidu.com/s?wd=' + this.searchInput);
        this.showView.emit(this.searchInput);
        document.getElementById('baidu').style.height = '600px';
      });
  }
  setUrl(url: string): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
