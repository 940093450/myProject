/**
 * Created by admin on 2017/2/24.
 */

/*
*
* 小于0+“0”的函数
**/

function addZero(num){
    if(typeof num!="number"){
           num="addZero参数类型错误";
    }
    else {
        num=num<10?"0"+num:num;
    }
    return num;
}
/**
 * 封装一个yid的函数
 *
 */
function getID(_id){
    var element=document.getElementById(_id);
    if(element){
        return element;
    }else {
        return "元素为空"
    }
}
/**
*创建表格
*/

function createTable(row,col){
    var str="<table>"
    for(var i=0;i<row;i++){
        str+="<tr>"
            for(var j=0;j<col;j++){
                str+="<td>1</td>";
            }
        str+="</tr>"
    }
    str+="</table>"
    return str;
}


function getWindowSize(){
    return{
        "width":document.documentElement.clientWidth||window.innerWidth,
        "height":document.documentElement.clientHeight||window.innerHeight
    }
}

function getScrollSize(){
    return{
        "top":document.documentElement.scrollTop||document.body.scrollTop,
        "left":document.documentElement.scrollLeft||document.body.scrollLeft
    }
}
/***
 *元素居中
 */
function center(element){
    element.style.left=(getWindowSize().width-element.offsetWidth)/2+getScrollSize().left+"px";
    element.style.top=(getWindowSize().height-element.offsetHeight)/2+getScrollSize().top+"px"
}


function chuLiEvent(_evt){
    return _evt=_evt||window.event;
}

function preventDfault(evt){
    if(window.event){
        //ie下的阻止默认动作
       window.event.returnValue=false;
    }else {
        //其他浏览器下的阻止默认动作；
        evt.preventDefault();
    }
}

function bubble(evt){
    if(window.event){
        //ie下的阻止冒泡
        window.event.cancelBubble=true;
    }else {
        //其他浏览器下的阻止冒泡；
        evt.stopPropagation();
    }
}






