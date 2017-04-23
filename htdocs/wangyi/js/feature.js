/**
 * Created by Administrator on 2017/4/15.
 */
$(function(){
    //////////顶部的输入框///////////
    //获得焦点时 输入框变宽
    $("#dropdowninput").focus(function(){
        $(this).animate({"width":"230px"},300);
        $("#inputdrop").animate({"opacity":1},300);
        //失去焦点时 输入框变窄
    }).blur(function(){
        $(this).animate({"width":"177px"},300);
        $("#inputdrop").animate({"opacity":0},300);
    });


    /*$("#user").hover(function(){
        console.log(1);
        $(this).popover('show')
    },function(){
        $(this).popover('hide')
    });*/

    //////////手机登录和邮箱登录的切换/////////////////
    //each循环
    $(".xuanze li").each(function(index){
        $(this).click(function(){
            //点击到的list添加样式
            $(".xuanze li").removeClass("active").eq(index).addClass("active");
            //通过index 完成登录方式和list同步切换
            $(".tel-email>div").css({"display":"none"}).eq(index).css({"display":"block"})
        });
    });
    /////点击"去注册" ///////
    $(".go_reg").click(function(){
        ///////登录页面消失////////
        $(".login").css({"display":"none"});
        ////注册页面显示//////
        $(".reg").css({"display":"block"});
    });
    ///点击注册页面的“关闭”，“手机号登录”时///
    $(".reg .modal-header .close,.reg .modal-footer").click(function(){
        //////注册页面消失///////
        $(".reg").css({"display":"none"});
        ////////登录页面显示////////
        $(".login").css({"display":"block"});
    });

    $(".username,.pwd").focus(function(){
        $("#feedback_container")[0].style.display="none";
    });

    //////////给注册框的三个input加上keyup事件/////////////
    $(".reg_container input").focus(function(){
        $(".reg_feedback").css({"display":"none"})
    }).keyup(function(){
        var m_val=$(".mobile_number").val();
        var v_val=$(".verification").val();
        var s_val=$(".set_pwd").val();
        /////当手机号框 有值时/////
        if(m_val){
            if($(".send_verification").html().length>3){
                //////发送验证码按钮添加样式 并能够点击//////
                $(".send_verification").addClass("active").attr("disabled", false).click(function(){

                });
                ///////当三个框都有值时//////
                if(m_val&&v_val&&s_val){
                    /////完成按钮颜色变深 并可以点击/////
                    $(".reg .ok").addClass("active");//.attr("data-dismiss", "modal");
                }else{
                    /////否则完成按钮颜色变浅 并不能点击/////
                    $(".reg .ok").removeClass("active");//.attr("data-dismiss", "");
                }
            }

        }else {
            //////否则发送验证码按钮删除样式 并不能点击//////
            $(".send_verification").removeClass("active").attr("disabled", true);
        }

    });

    //////////给手机号登录页面的 手机号和密码框加上keyup事件///////////
    $(".tel_login input").keyup(function(){
        var user_val=$(".tel_login .username").val();
        var pwd_val=$(".tel_login .pwd").val();
        ///当两个框都有值时//
        if(user_val&&pwd_val){
            ///////登录按钮演示变深 并可以点击///////
            $(".login .login_btn").addClass("active");//.attr("data-dismiss", "modal");
        }else{
            /////否则登录按钮颜色变浅  并不能点击///////
            $(".login .login_btn").removeClass("active");//.attr("data-dismiss", "");
        }
    });
    $(".email_login input").keyup(function(){
        var email_val=$(".email_login .email").val();
        var pwd_val=$(".email_login .pwd").val();
        ///当两个框都有值时//
        if(email_val&&pwd_val){
            ///////登录按钮演示变深 并可以点击///////
            $(".email_login .login_btn").addClass("active");//.attr("disabled", false)
        }else{
            /////否则登录按钮颜色变浅  并不能点击///////
            $(".email_login .login_btn").removeClass("active");//.attr("disabled",true)
        }
    })
});
