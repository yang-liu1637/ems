/* 2019-12-20 17110100525 刘洋 高级网页设计 */
var json=[{
    link:"https://m.iqiyi.com/v_19ruwhdp98.html?vfrm=2-3-0-1&uback=1",
    img:"../imgs/qyn/x1.webp",
    h3:"剑王朝",
    author:"一剑惊梦再现江湖",
    h4:"热度7891",
},{
    link:"https://m.iqiyi.com/v_19rr7p5ujk.html",
    img:"../imgs/qyn/x2.webp",
    h3:"妖猫传",
    author:"云想衣裳花想容",
    h4:"热度8943",
},{
    link:"https://m.iqiyi.com/v_19rr7p5ujk.html",
    img:"../imgs/qyn/x3.jpg",
    h3:"天机十二宫",
    author:"公主的小狼狗驯养指南",
    h4:"热度8943",
},{
    link:"https://m.iqiyi.com/v_19ruz2amm8.html?uback=1",
    img:"../imgs/qyn/x4.jpg",
    h3:"从前有座灵剑山",
    author:"许凯张榕容搞笑修行",
    h4:"热度2983",
},{
    link:"https://m.iqiyi.com/v_19rvacnw3o.html?uback=1",
    img:"../imgs/qyn/x5.jpg",
    h3:"第二次也很美",
    author:"王子文张鲁一为爱蓄力",
    h4:"热度3393",
}]
for(var i=0;i<json.length;i++){
    var li=document.createElement("li");
    var row=`<a href="${json[i].link }"><img src="${json[i].img}" ></a>
        <div class="jtext">
            <h3>${json[i].h3}</h3>
            <span class="author">${json[i].author}</span>
            <h4>${json[i].h4}</h4>
            <span class=" time iconfont icon-sandian"></span>
        </div>`;//ES6反引号，可以写任何格式还能够带变量，还能够多行字符串
    li.innerHTML=row;
    document.querySelector(".jlist").appendChild(li);
}