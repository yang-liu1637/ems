import { Component, OnInit } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
      'assets/images/1.jpg',
      'assets/images/green.png',
      'assets/images/1.jpg'
    ];
  }
}
