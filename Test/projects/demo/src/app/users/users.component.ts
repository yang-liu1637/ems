import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';
import { SwiperOptions } from 'swiper';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
 /* public subject = new Subject();
  private searchTerms = new Subject<string>();
  res = false;

  search(searchParam: string): void {
    this.searchTerms.next(searchParam);
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
  }*/
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

  ngOnInit() {

    this.swiperList = [
      '../../assets/images/jpg3.svg',
      '../../assets/images/jpg3.svg',
      '../../assets/images/jpg3.svg'
    ];
  }
}
