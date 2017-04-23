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
    var str="<table>";
    for(var i=0;i<row;i++){
        str+="<tr>";
            for(var j=0;j<col;j++){
                str+="<td>1</td>";
            }
        str+="</tr>"
    }
    str+="</table>";
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
* 创建ajax对象
*/
function createXMLHttpRequest(){
    var xmlHttp;
    if (window.ActiveXObject){
        xmlHttp=new ActiveXObject('Microsoft.XMLHTTP');
    }else{
        xmlHttp=new XMLHttpRequest();
    }
    return xmlHttp;
}
/*
*
* 修建数据左面和右面的空格
*
* */
function trim(content){
    //           空格 内容 空格
    var pattern=/^\s*(.+?)\s*$/g;
    content=content.replace(pattern,"$1");
    return content;
}
/*
* 邮箱验证
* */
function email_validate(content){
    var pattern=/^[a-z0-9]+([\._-][a-z0-9]+)?@[a-z0-9]+([_-][a-z0-9]+)?\.[a-z]{2,5}$/i;
    if(content){
        if(!pattern.test(content)){
            return false
        }
    }
    return true;
}
/*
*
*
 * 4:密码为空 3；密码强度低 2：中 1：较高  0：高
 * */
function pwd_validate(content){
    var num=0;
    if(!/[\d]/.test(content)){
        num+=1;
    }
    if(!/[a-z]/.test(content)){
        num+=1;
    }
    if(!/[A-Z]/.test(content)){
        num+=1;
    }
    if(!/[\W]/.test(content)){
        num+=1;
    }
    return num;
}


/*
* 创建本地存储
* */
function set(key,value){
    var curTime=new Date().getTime();
    try {
        //JSON.stringify:把对象转换为字符串；
        localStorage.setItem(key,JSON.stringify({data:value,time:curTime}))
    }catch (e){
        localStorage.clear();
    }
}

/*
 * 获取key值
 *
 * */
function get(key,expires){
    //获取key的值，类型是字符串
    var data=localStorage.getItem(key);
    //如果获取到了存储的值
    if (data){
        var dataObj=JSON.parse(data);
        var curTime=new Date().getTime();
        //console.log(curTime);
        console.log(dataObj.time);
        //当前的时间戳减去以前存储的时间戳
        if (curTime-dataObj.time>expires){
            localStorage.removeItem(key);
            console.log("过期了")
        }else {
            return JSON.stringify(dataObj.data)
        }
    }
}
function setCookie(_name,_value,_expires,_path,_domain,_secure){
    var cookieText=_name+"="+encodeURI(_value);
    //判断
    if (_expires instanceof Date){
        cookieText+=";expires="+_expires;
    }
    if (_path){
        cookieText+=";path="+_path;
    }
    if (_domain){
        cookieText+=";domain="+_domain
    }
    if (_secure){
        cookieText+=";secure"
    }
    document.cookie=cookieText;
    //return cookieText;
}
/**
 * 获取cookie
 * */
function getCookie(_name){
    _name+="=";
    var str=document.cookie;
    var strStart=str.indexOf(_name);
    var strEnd=str.indexOf(";",strStart);
    if (strEnd==-1){
        strEnd=str.length;
    }
    return decodeURI(str.substring(strStart+_name.length,strEnd));
}
function removeCookie(_name){
    document.cookie=_name+"=;expires="+new Date(0);
}