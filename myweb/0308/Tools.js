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

/*
* 获取鼠标选择的文本
* */
function getSelection(){
    var txt=null;
    if(window.getSelection()){
        txt=window.getSelection();
    }else if(document.selection){
        txt=document.selection.createRange().text;
    }else if(document.getSelection()){
        txt=document.getSelection();
    }
    return txt;
}

/*
 * 重定向
 * 反馈信息
 * 不同状态有不同颜色，有跳转和不跳转两种选择
 * @param_mag
 *
 * <style>
 *{
 font-size:14px;
 font-family:微软雅黑;
 color: #ffa781;

 }
 .redirect{
 width:300px;
 height:150px;
 border:1px solid #ddd;
 position:absolute;
 box-shadow:0 0 3px #ddd;
 z-index:100000;
 }
 .redirect_header{
 height:30px;
 border-bottom:1px solid #ddd;
 line-height:30px;
 }
 .redirect_body{
 height:90px;
 line-height:90px;
 text-align:center;
 }
 .redirect_footer {
 height: 30px;
 border-top:1px solid #ddd;
 text-align:center;
 line-height:30px;
 }
 .progress_bar{
 height:20px;
 background: rgba(32, 156, 255, 0.35);
 width:0%;
 transition:width 0.5s linear;
 }
 #countdown{
 display:inline-block;
 width:15%;
 padding-left:85px;
 }
 #msg{
 display:inline-block;
 width:50%;
 padding-left:15px;
 }
 </style>
 *
 *
 *
 *<div class="redirect">
 <div class="redirect_header">
 <span id="msg">删除成功</span>
 <span id="countdown">

 </span></div>
 <div class="redirect_body">
 <div class="progress_bar"></div>
 <div class="percent">0%</div>
 </div>
 <div class="redirect_footer">页面跳转中，请稍后...</div>
 </div>
 *
 *
 *
 * */
function redirect(_msg,flag){
    var redirect=document.querySelector(".redirect");
    var countdown=document.querySelector("#countdown");
    var mag=document.querySelector("#msg");
//    类名称为percent的div
    var percent=document.querySelector(".percent");
    var progress_bar=document.querySelector(".progress_bar");
    if(flag==1){
        mag.innerHTML=_msg;
        mag.style.color="green";
    }else if(flag==0){
        mag.innerHTML=_msg;
        mag.style.color="red";
    }
//        把用户的信息显示在header上
    center(redirect);
    var durtion=15;
    var p=0;
    var timer=setInterval(function(){
        durtion--;
        if(durtion==0){
            clearInterval(timer);
            redirect.style.display="none";
            if(flag==1){
                location.href="https://www.baidu.com/";
            }
        }
//        倒计时的值赋给countdown的值
        countdown.innerHTML=durtion;
        p++;
//        把求出来的百分比赋给div,显示在页面上
        percent.innerHTML=parseInt(p/15*100)+"%";
//        设置进度条的百分比
        progress_bar.style.width=parseInt(p/14*100)+"%";
    },200)
}







