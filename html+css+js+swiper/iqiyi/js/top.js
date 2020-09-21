/* 2019-12-20 17110100525 刘洋 高级网页设计 */
/* window.onscroll滚动条滚动的时候发生的效果 */
window.onscroll = function () {
    /* scrollTop向上滚 */
    var st = document.documentElement.scrollTop || document.body.scrollTop;
    if (st > btop.offsetHeight) {
        //根据滚动的值进行判断
        fixed.style.position = "fixed";
    } else {
        /* fixed.style.position="static"; */
    }
    if (st < btop.offsetHeight) {
        //根据滚动的值进行判断
        fixed.style.position = "static";
    } else {
        /* fixed.style.position="fixed"; */
    }
};