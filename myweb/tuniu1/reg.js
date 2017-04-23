/**
 * Created by Administrator on 2017/3/19.
 */
$(function(){
    $(".zC").click(function(){
        $(".reg_top").animate({top:0},1000,function(){
            $(".reg_mask,.reg_reg").css({"display":"block"});
            $("#reg_Zc button").css({"background":"#666666"}).attr('disabled',true);
        });

    });
    $("#name input").focus(function(){
            $(".tiShi div").eq(0).css({"opacity":"0"})
    }).blur(function(){
        var nameVal= $.trim($("#name input").val());
        if(nameVal){

        }else {
            $(".tiShi div").eq(0).css({"opacity":"1"})
        }
    });
    $("#reg_txt input").focus(function(){
        $(".tiShi div").eq(1).css({"opacity":"0"})
    }).blur(function(){
        var nameVal=$.trim($("#reg_txt input").val());
        if(nameVal){

        }else {
            $(".tiShi div").eq(1).css({"opacity":"1"})
        }
    });
    $("#reg_pwd input").focus(function(){
        $(".tiShi div").eq(2).css({"opacity":"0"})
    }).blur(function(){
        var nameVal=$.trim($("#reg_pwd input").val());
        if(nameVal){

        }else {
            $(".tiShi div").eq(2).css({"opacity":"1"})
        }
    });
    $("#reg_pwdSure input").focus(function(){
        $(".tiShi div").eq(3).css({"opacity":"0"})
    }).blur(function(){
        var nameVal=$.trim($("#reg_pwd input").val());
        var sureVal=$.trim($("#reg_pwdSure input").val());
        if(sureVal){
            if(nameVal==sureVal){
                //$(".tiShi div").eq(3).css({"opacity":"1"})
            }else {
                $(".tiShi div").eq(3).css({"opacity":"1"})
            }
        }else {
            $(".tiShi div").eq(3).css({"opacity":"1"})
        }

    });
    //$("#reg_Zc button").disabled(true);
    $("#reg_yanZ input,#name input,#reg_txt input,#reg_pwd input,#reg_pwdSure input").keyup(function(){
        var nameVal=$.trim($("#name input").val());
        var texVal=$.trim($("#reg_txt input").val());
        var pwdVal=$.trim($("#reg_pwd input").val());
        var sureVal=$.trim($("#reg_pwdSure input").val());
        var yzVal=$.trim($("#reg_yanZ input").val());
        if(nameVal&&texVal&&pwdVal&&sureVal&&yzVal){
            if(pwdVal==sureVal){
                $("#reg_Zc button").css({"background":"#43B413"});
                $("#reg_Zc button").attr('disabled',false);
            }else {
                $("#reg_Zc button").css({"background":"#666666"}).attr('disabled',true)
            }
        }else {
            $("#reg_Zc button").css({"background":"#666666"}).attr('disabled',true)
        }
        //$("#reg_Zc button").css({"background":"#43B413"}).disabled(false)
    });
    /*$("#name input").blur(function(){
        var nameVal=$("#name input").val();
        if(nameVal){

        }else {
            $(".tiShi div").eq(0).css({"display":"block"})
        }
    });*/
    //$(".tiShi div").eq(0).css({"display":"block"});
     i=5;
    $("#reg_Zc button").click(function(){
        $(".lesGo").css({"display":"block"});

        var over=setInterval(function(){
            i--;
            $(".lesGo p").html(i+"秒钟后将自动登录···");
            if(i==1){
                clearInterval(over)
            }
        },1000);
        setTimeout(function(){
            $(".reg_mask,.reg_reg").css({"display":"none"});
            $(".reg_top").animate({top:-110+"px"},1000,function(){
                $(".weiDengLu").css({"display":"none"});
                $(".yiDengLu").css({"display":"block"});
                $("#yongHu span:eq(0)").html($.trim($("#name input").val()));
            });

        },5000);
    });
    $("#back").click(function(){
        //alert(123);
        $(".reg_mask,.reg_reg").css({"display":"none"});
        $(".reg_top").animate({top:-110+"px"},1000);
    })
});