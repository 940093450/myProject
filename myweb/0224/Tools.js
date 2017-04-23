/**
 * Created by admin on 2017/2/24.
 */
function addZero(num){
    if(typeof num!="number"){
           num="addZero参数类型错误";
    }
    else {
        num=num<10?"0"+num:num;
    }
    return num;
}