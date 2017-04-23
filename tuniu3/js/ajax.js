/**
 * Created by Administrator on 2017/4/6.
 */
///////////////login登录部分///////////////////
/*$(function(){
    var xhr=new XMLHttpRequest();
    var fd=new FormData();
    $("#login_But").click(function(){
        xhr.open("post","../tuniu3/php/getAll.php");
        fd.append("username",$("#txt input").val());
        fd.append("pwd",$("#pwd input").val());
        xhr.send(fd);
        xhr.addEventListener("readystatechange",function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    console.log(xhr.responseText);
                }
            }
        })
    })
});*/


////////reg 注册部分//////////////
$(function(){
    /*setTimeout(function(){
        console.log($("#name>input").val());
    },3000);*/

    var xhr=new XMLHttpRequest();
    var fd=new FormData();
    console.log($("#reg_Zc>button"));
    $("#reg_Zc>button").click(function(){
        xhr.open("post","../tuniu3/php/regEnd.php");
        fd.append("username",$("#name>input").val());
        fd.append("pwd",$("#reg_pwd>input").val());
        fd.append("email",$("#reg_txt>input").val());
        xhr.send(fd);
        xhr.addEventListener("readystatechange",function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    //console.log(xhr.responseText);
                }
            }
        })
    })


});