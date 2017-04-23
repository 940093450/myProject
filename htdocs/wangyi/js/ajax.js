/**
 * Created by Administrator on 2017/4/17.
 */

$(function(){
    //点击头像下面的 去登录 也可以进入登录页面//
    $(".xinxi_username").attr("data-toggle","modal");
    ///////如果sessionStorage有值显示用户已登录状态/////////
    if(sessionStorage.getItem("mobile_number")){
        $(".wrap_login").css({"display":"none"});
        $(".wrap_username").css({"display":"inline-block"}).html(sessionStorage.getItem("mobile_number"));
        $(".xinxi_username").html(sessionStorage.getItem("mobile_number"));
        $(".logout").css({"display":"block"})
    }
    ///////如果cookie有值显示用户已登录状态/////////
    if(getCookie("mobile_number")){
        $(".wrap_login").css({"display":"none"});
        $(".wrap_username").css({"display":"inline-block"}).html(getCookie("mobile_number"));
        $(".xinxi_username").html(getCookie("mobile_number"));
        $(".logout").css({"display":"block"})
    }
    //////////两个中任何一个有值  ///////////
    if(sessionStorage.getItem("mobile_number")||getCookie("mobile_number")){
        ////////“游客，请登录”点击不会出现登录界面//////////
        $(".xinxi_username").attr("data-toggle","");
        //////如果sessionStorage有图片的值 直接显示头像///////
        if(sessionStorage.getItem("img_src")){
            $("#user>img").attr("src",sessionStorage.getItem("img_src"));
        }
        ///////已登录情况下 换头像功能才有效/////
        var fr=new FileReader();
        $("#user>img").click(function(){
            ////触发file 的点击事件///
            $("#icon").click();
            $("#icon")[0].addEventListener("change",function(){
                fr.readAsDataURL(this.files[0]);
                ///加载成功后///
                fr.addEventListener("load",function(){
                    ///将选择的图片存到sessionStorage///
                    sessionStorage.setItem("img_src",this.result);
                    ///并同步到头像//
                    $("#user>img").attr("src",this.result)
                })
            });
        });
    }else {
        $("#user")[0].title="请先登录"
    }

    ///////点击退出  删除指定的sessionStorage和cookie////////
    $(".logout").click(function(){
        removeCookie("mobile_number");
        sessionStorage.removeItem("mobile_number");
        //“退出list 消失”//
        $(".logout").css({"display":"none"});
        location.href="index.html"
    });



    ///////////登录页面ajax//////////////////
    var username=document.querySelector(".username");
    var pwd=document.querySelector(".pwd");
    var check=document.querySelector(".check");
    var login_btn=document.querySelector(".login_btn");
    login_btn.addEventListener("click",function(){
        ////如果手机格式不正确 给出提示 不能向下走/////
        if(tel_validate(username.value)==false){
            $("#feedback_container")[0].style.display="block";
            $("#feedback")[0].innerHTML="请输入正确格式的手机号";
            return false
        }
        ////创建ajax对象///
        var xhr=new XMLHttpRequest();
        var fd=new FormData();
        /////链接后台///
        xhr.open("post","../wangyi/php/getAll.php");
        fd.append("username",username.value);
        fd.append("pwd",pwd.value);
        /////向后台传值////
        xhr.send(fd);
        //状态改变事件//
        xhr.addEventListener("readystatechange",function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    if(xhr.responseText=="ok"){
                        ///==“ok”可以登录///
                        //登录后刷新页面//
                        location.href="index.html";
                        /*$(".wrap_login").css({"display":"none"});
                        $(".wrap_username").css({"display":"inline-block"}).html(username.value);*/
                        //用Cookie实现10天免登录效果
                        var d=new Date();
                        //从登录的时间加上10天的时间
                        var expires=new Date(d.setDate(d.getDate()+10));
                            //如果勾选10天免登录
                            if(check.checked){
                                //cookie存上一个登入后10天到期的值
                                setCookie("mobile_number",username.value,expires)
                            }else {
                                //如果不勾选 cookie值也存储 但是关掉网页就会删除
                                setCookie("mobile_number",username.value)
                            }
                        /////给登录按钮加上"data-dismiss", "modal" 点击之后模态框消失/////
                        $(".login_btn").attr("data-dismiss", "modal").click();
                        //location.href="index.html";
                        //////注册页面消失///////
                        $(".reg").css({"display":"none"});
                        ////////登录页面显示////////
                        $(".login").css({"display":"block"});
                    }else if(xhr.responseText=="failed"){
                        ///==“failed”不能登录
                        /////给出提示信息////
                        $("#feedback_container")[0].style.display="block";
                        $("#feedback")[0].innerHTML="手机号或者密码错误";
                        return false
                    }else {
                        console.log(xhr.responseText);
                    }
                }
            }
        })
    });




    //////////注册页面ajax///////////
    var reg_feedback=document.querySelector(".reg_feedback");
    var mobile_number=document.querySelector(".mobile_number");
    var verification=document.querySelector(".verification");
    var send_verification=document.querySelector(".send_verification");
    var set_pwd=document.querySelector(".set_pwd");
    var ok=document.querySelector(".ok");
    var fd=new FormData();
    var errorMsg="";
    ////点击发送验证码////
    send_verification.addEventListener("click",function(){
        /////判断手机号格式 如果不正确 给出提示 不再向下执行/////
        if(tel_validate(mobile_number.value)==false){
            errorMsg="手机号码格式不正确";
            reg_feedback.style.display="block";
            reg_feedback.innerHTML=errorMsg;
            return false
        }else {
            /////如果正确 模拟发送后过程 不可再点击///////
            $(".send_verification").removeClass("active").attr("disabled", true).html(60+"秒");
            var i=60;
            //计时器 实现60秒倒计时//
            var setInt=setInterval(function(){
                i--;
                $(".send_verification").html(i+"秒");
            },1000);
            //倒计时完了之后可重新获取
            setTimeout(function(){
                clearInterval(setInt);
                $(".send_verification").addClass("active").attr("disabled", false).html("重新发送");

            },60000);
        }
    });
    /////点击“完成”按钮//////
    ok.addEventListener("click",function(){
        //判断手机号格式 如果不正确 给出提示//
        if(tel_validate(mobile_number.value)==false){
            //把错误信息赋给errorMsg//
            errorMsg="手机号码格式不正确";
        }else {
            //没错的话errorMsg为空//
            errorMsg="";
        }
        if(!mobile_number.value){
            //把错误信息赋给errorMsg//
            errorMsg="手机号码不能为空";
        }
        ///如果errorMsg有值 说明有错误 给出相对的错误提示///
        if(errorMsg){
            reg_feedback.style.display="block";
            reg_feedback.innerHTML=errorMsg;
            return false
        }
        ///创建ajax对象 作用是查看用户输入的账号是否被占用///
        var xhr1=new XMLHttpRequest();
        xhr1.open("post","../wangyi/php/reg.php");
        fd.append("username",mobile_number.value);
        fd.append("flag","checkusername");
        xhr1.send(fd);
        xhr1.addEventListener("readystatechange",function(){

            if(xhr1.readyState==4){
                if(xhr1.status==200){
                    /////==“taken” 提示手机号已占用 /////
                    if(xhr1.responseText=="taken"){
                        errorMsg="该手机号已被注册";
                        reg_feedback.style.display="block";
                        reg_feedback.innerHTML=errorMsg;
                        return false;

                    }else if(xhr1.responseText=="available"){
                        /////==“available”手机号可用 /////
                        if(!set_pwd.value){
                            errorMsg="密码不能为空";
                        }
                        if(!verification.value){
                            errorMsg="验证码不能为空";
                        }
                        /////验证码 密码不为空后 可执行下一步操作/////
                        if(errorMsg){
                            reg_feedback.style.display="block";
                            reg_feedback.innerHTML=errorMsg;
                            return false
                        }
                        ////创建ajax对象 作用是将注册的账号密码等信息传到数据库/////
                        var xhr2=new XMLHttpRequest();
                        ///链接
                        xhr2.open("post","../wangyi/php/reg.php");
                        fd.append("username",mobile_number.value);
                        fd.append("pwd",set_pwd.value);
                        fd.append("flag","reg");
                        ///发送
                        xhr2.send(fd);
                        ///状态改变时间
                        xhr2.addEventListener("readystatechange",function(){
                            if(xhr2.readyState==4){
                                if(xhr2.status==200){
                                    //////注册成功后将数据也存到本地
                                    sessionStorage.setItem("mobile_number",mobile_number.value);
                                    /////实现注册成功后直接登录
                                    ///未登入状态消失
                                    $(".wrap_login").css({"display":"none"});
                                    //已登录状态显示
                                    $(".wrap_username").css({"display":"inline-block"}).html(mobile_number.value);
                                    ///点击完成后 模态框消失
                                    $(".reg .ok").addClass("active").attr("data-dismiss", "modal").click();
                                    ////清空填写过的注册信息
                                    $(".reg_container input").val("");
                                        //////注册页面消失///////
                                    $(".reg").css({"display":"none"});
                                        ////////登录页面显示////////
                                    $(".login").css({"display":"block"});

                                }
                            }
                        });


                    }else {
                        errorMsg="未知错误";
                        feedback.innerHTML=errorMsg;
                        return false
                    }
                }
            }
        });


    });
});
