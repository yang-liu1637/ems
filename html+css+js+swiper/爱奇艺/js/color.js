/* 2019-12-20 17110100525 刘洋 高级网页设计 */
changeColor();

inps[0].οnclick=function(){
    changeColor();

};

function changeColor(){
    var hdbox = document.querySelectorAll("ul>.hdbox");
    for(var i = 0; i<10; i++){
        var r = Math.ceil(Math.random()*425);
        var g = Math.ceil(Math.random()*425);
        var b = Math.ceil(Math.random()*425);
        hdbox[i].style.backgroundColor="rgb("+r+","+g+","+b+")";
    }
}