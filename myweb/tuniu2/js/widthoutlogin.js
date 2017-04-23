/**
 * Created by Administrator on 2017/3/29.
 */
window.addEventListener("load",function(){
    var mask=document.querySelector("#mask");
    var login=document.querySelector(".login");
    var weiDengLu=document.querySelectorAll(".weiDengLu");
    var yiDengLu=document.querySelectorAll(".yiDengLu");
    var username=document.querySelector("#username");
    var logout=document.querySelector("#logout");
    var ckx=document.querySelector("#ckx input");
    var txt=document.querySelector("#txt");
    var login_But=document.querySelector("#login_But");
    //console.log(login_But);
    var d=new Date();
    var expires=new Date(d.setDate(d.getDate()+7));
    //console.log(getCookie("name"));
    if(getCookie("name")){
        for(var i=0;i<weiDengLu.length;i++){
            weiDengLu[i].style.display="none";
            yiDengLu[i].style.display="block";
        }
        username.innerText=getCookie("name");
    }else {
        for(var j=0;j<weiDengLu.length;j++){
            weiDengLu[j].style.display="block";
            yiDengLu[j].style.display="none";
        }
    }
    login_But.addEventListener("click",function(){
        if(ckx.checked){
            setCookie("name",txt.value,expires)
        }else {
            setCookie("name",txt.value)
        }
        username.innerText=getCookie("name");
    });
    logout.addEventListener("click",function(){
        removeCookie("name");
    })

});