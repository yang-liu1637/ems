import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {MainUsersService} from '../service/mainUsers.service';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';
import { SwiperOptions } from 'swiper';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private searchTerms = new Subject<string>();
  res = false;
  swiperList: any[];
  // 轮播图初始化
  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true }, // 如果需要前进后退按钮
    navigation: { // 分页器
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    scrollbar: { // 如果需要滚动条
      el: '.swiper-scrollbar',
    },
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    speed: 600, // 滑动时间
    grabCursor: true, // 鼠标指针形状
    autoplay: {
      delay: 1500,
      stopOnLastSlide: false,
      disableOnInteraction: false // 手动滑动之后依然自动轮播
    }, // 自动滑动
    /*  effect : 'fade', // 切换效果*/
    observer: true, // 修改swiper自己或子元素时，自动初始化swiper
    observeParents: true, // 修改swiper的父元素时，自动初始化swiper
  };

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
    // 轮播图list
    this.swiperList = [
      '../../assets/images/jpg3.svg',
      '../../assets/images/jpg3.svg',
      '../../assets/images/jpg3.svg'
    ];
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
