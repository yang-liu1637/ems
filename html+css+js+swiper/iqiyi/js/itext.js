/* 2019-12-13 17110100525 刘洋 高级网页设计 */
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});
var itext = new Swiper('.itext', {
    direction: 'vertical',
    //  垂直的
    autoplay: {
        delay: 3500,
        // 延迟多少ms
        disableOnInteraction: false,
    },
});