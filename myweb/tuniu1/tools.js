/**
 * Created by admin on 2017/3/12.
 */
function qc(){
    for (var j=0;j<leftLis.length;j++){
        leftLis[j].className="";
    }
}
function clean(){
    for(var j=0;j<lis.length;j++){
        lis[j].className="";
    }
}


//给需要的元素加个鼠标事件
// 事件的功能是让自动轮播停止且
// 给两侧滑动按键加上不透明度 不透明度自定义
function block(element1,element2,element3,l,r){
    return element1.addEventListener("mouseover",function(){
        //clearInterval(scroll);
        element2.style.opacity=l;
        element3.style.opacity=r;
    });
}
//给需要的元素加个鼠标移开事件
// 事件的功能是让自动轮播继续且
//两侧滑动按键全透明
function none(element){
    return element.addEventListener("mouseout",function(){
        //scroll=setInterval(aa,3000);//鼠标移开继续执行自动轮播
        left.style.opacity=0;
        right.style.opacity=0;
    })
}