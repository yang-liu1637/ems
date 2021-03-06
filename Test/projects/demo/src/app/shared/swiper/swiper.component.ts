import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { Swiper} from 'swiper';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SwiperComponent),
    multi: true
  }]
})
export class SwiperComponent implements OnInit {
  // 轮播数据
  @Input() swiperList: any = [];

  constructor() { }

  ngOnInit() {

    // 轮播图初始化
    setTimeout(() => {
      this.swiperInit();
    }, 0);
  }

  // 轮播图初始化
  swiperInit() {
    // tslint:disable-next-line: no-unused-expression
    new Swiper ('.swiper-container', {
      direction: 'horizontal', // 水平切换选项
      loop: true, // 循环模式选项
      speed: 600, // 滑动时间
      grabCursor: true, // 鼠标指针形状
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: false // 手动滑动之后依然自动轮播
      }, // 自动滑动
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true, // 修改swiper的父元素时，自动初始化swiper
      navigation: {  // 分页器
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: { // 如果需要前进后退按钮
          el: '.swiper-pagination',
      },
      // scrollbar: { // 如果需要滚动条
      //     el: '.swiper-scrollbar',
      // }
      // /!*  effect : 'fade', // 切换效果*!/
    });
  }

}
