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