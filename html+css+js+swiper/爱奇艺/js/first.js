/* 2019-12-14 17110100525 刘洋 高级网页设计 */
var swiper = new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination'},
});
var first = new Swiper('.first',{
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});