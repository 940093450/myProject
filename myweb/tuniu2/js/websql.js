/**
 * Created by Administrator on 2017/3/30.
 */
window.addEventListener("load",function(){
    var name=document.querySelector("#name input");
    var name_ts=document.querySelector("#name_ts");
    var mobile=document.querySelector("#reg_txt input");
    var mobile_ts=document.querySelector("#mobile_ts");
    var reg_zc=document.querySelector("#reg_Zc button");
    var db=openDatabase("member","1.0","websql",2*1024*1024,function(){
        console.log("创建数据库成功")
    });
    reg_zc.addEventListener("click",function(){
        db.transaction(function(tx){
            //创建表
            tx.executeSql("create table if not exists member(id integer primary key asc,username text,mobile text)");
            //把提交的用户名和邮箱通过sql语句，添加到member表中
            tx.executeSql("insert into member(username,mobile)values('"+name.value+"','"+mobile.value+"')");
            //location.reload();
        });
    });
    db.transaction(function(tx){
        //从数据库里面查询
        tx.executeSql("select * from member order by id desc",[],function(tx,results){
            name.addEventListener("keyup",function(){
                name_ts.style.opacity=1;
                for(var i=0;i<results.rows.length;i++){
                    if (name.value==results.rows[i].username){
                        name_ts.innerHTML="用户名已存在";
                        name_ts.style.background="url('../tuniu2/login/3.png') 0 1px no-repeat";
                        //name_ts.style.background="red";
                        //console.log(results.rows[i].);
                        break;
                    }else {
                        name_ts.innerHTML="用户名可用";
                        name_ts.style.background="url('../tuniu2/regimg/4.png') 0 1px no-repeat";
                    }
                }

            });
            mobile.addEventListener("keyup",function(){
                mobile_ts.style.opacity=1;
                console.log(123);
                for(var i=0;i<results.rows.length;i++){
                    /*if(mobile.value.length==11){
                        if (mobile.value==results.rows[i].username){
                            mobile_ts.innerHTML="该手机号已注册";
                            mobile_ts.style.background="url('../tuniu2/login/3.png') 0 1px no-repeat";
                            //name_ts.style.background="red";
                            reg_zc.style.background="#666666";
                            reg_zc.disabled =true;
                            break;
                        }else {
                            mobile_ts.innerHTML="可以注册";
                            mobile_ts.style.background="url('../tuniu2/regimg/4.png') 0 1px no-repeat";
                            console.log(123);
                        }
                    }*/


                }
            })
        });

    });


});