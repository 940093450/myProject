/**
 *
 *//////////////////////年   月   日 div1 div2 div3 到几点结束
function ShowCountDown(year,month,day,d1,d2,d3,time)
{
    var now = new Date();//获取当前
    var endDate = new Date(year, month-1, day);//从哪年哪月哪日开始;
    var leftTime=endDate.getTime()-now.getTime();
    var leftsecond = parseInt(leftTime/1000);//两个时间点相距多少秒
    var day1=Math.floor(leftsecond/(60*60*24));//天
    var hour=Math.floor((leftsecond-day1*24*60*60)/3600);//时
    var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60);//分
    var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60);//秒
    var aa = document.querySelector(d1);
    var bb = document.querySelector(d2);
    var cc = document.querySelector(d3);
    aa.innerHTML = addZero(hour-(24-time));
    bb.innerHTML = addZero(minute);
    cc.innerHTML = addZero(second);
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


function addZero(num){
    if(typeof num!="number"){
        num="addZero参数类型错误";
    }
    else {
        num=num<10?"0"+num:num;
    }
    return num;
}
function qc(){
    for (var j=0;j<leftLis.length;j++){
        leftLis[j].className="";
    }
}
function clean(){
    for(var j=0;j<lis.length;j++){
        lis[j].className="";
    }
}


//给需要的元素加个鼠标事件
// 事件的功能是让自动轮播停止且
// 给两侧滑动按键加上不透明度 不透明度自定义
function block(element,l,r){
        return element.addEventListener("mouseover",function(){
        clearInterval(scroll);
        left.style.opacity=l;
        right.style.opacity=r;
    });
}
//给需要的元素加个鼠标移开事件
// 事件的功能是让自动轮播继续且
//两侧滑动按键全透明
function none(element){
    return element.addEventListener("mouseout",function(){
        scroll=setInterval(aa,3000);//鼠标移开继续执行自动轮播
        left.style.opacity=0;
        right.style.opacity=0;
    })
}
//一个叉 点击之后top图片消失
function top_banner(){
    dlt.addEventListener("click",function(){
        top_tp.style.display="none";
        //console.log(tt)
    });
}






//右侧的信息栏
function rt() {
    var lis1 = document.querySelectorAll("#c3 li");
    var uls = document.querySelectorAll(".con5 ul");

    for (var i = 0; i < lis1.length; i++) {
        lis1[i].setAttribute("index1", i);
        lis1[i].addEventListener("mouseover", function () {
            for (var  j = 0; j < lis1.length; j++) {
                lis1[j].className = "";
                uls[j].className = "";
            }
            this.className = "active";
            uls[this.getAttribute("index1")].className = "spotlight";
        })
    }

//    第二行列表关联
    var lis2 = document.querySelectorAll(".c6 li");
    var demo = document.querySelector(".con6>div");
    for (var f = 0; f < lis2.length; f++) {
        lis2[f].setAttribute("index1", f);
        lis2[f].addEventListener("mouseover", function () {
            for ( var s = 0; s < lis2.length; s++) {
                lis2[s].className = ""
            }
            var index = this.getAttribute("index1");
            demo.innerHTML = "<img src='img/" + index + ".png'>";
            this.className = "l1";
        })
    }

}

//右侧的浮窗导航
function right_nav(){
    var liS=document.querySelectorAll("ul li:nth-child(2)");
    var lis1=document.querySelectorAll("ul li:nth-child(1)");
    for(var i=0;i<liS.length;i++){
        liS[i].setAttribute("index",i);
        liS[i].addEventListener("mouseover",function(){
            for(var j=0;j<liS.length;j++){
                liS[j].className="";
                lis1[j].className="";
            }
            this.className="active";
            lis1[this.getAttribute("index")].className="spotlight";
        })
    }
    for(var h=0;h<liS.length;h++){
        lis1[h].setAttribute("index",h);
        lis1[h].addEventListener("mouseout",function(){
            this.className="";
            liS[this.getAttribute("index")].className="";
        })
    }
    var ul=document.querySelectorAll("#r-div3 ul")[0];
    ul.addEventListener("click",function(){
        window.scrollTo(0,0);

    })
}

/*左侧的导航*
 */
function Left_Nav(){
    window.addEventListener("scroll",function(){
        var scroll=getScrollSize().top;
        if(scroll>600){
            so.className="active2";
            r_div.style.opacity=1;
            r_div.style.transition="opacity 1s";
            if(scroll>=1500){
                left_nav.style.opacity=1;
                left_nav.style.transition="opacity 1s";    //一小
            }else if(scroll<1500){
                left_nav.style.opacity=0;
                left_nav.style.transition="opacity 1s";   //波判
            }
        }else if(scroll<1500){
            left_nav.style.opacity=0;
            left_nav.style.transition="opacity 1s";       //断实现
            qc();
            if(scroll<600){
                so.className="so";
                r_div.style.opacity=0;
                r_div.style.transition="opacity 1s";      //浮窗的显示显示和消失
            }
        }
        if(scroll>=1500&&scroll<2200){
            qc();
            leftLis[0].className="bred"
        }else if(scroll>=2200&&scroll<2800){
            qc();
            leftLis[1].className="bred"
        }else if(scroll>=2800&&scroll<3300){
            qc();                                       //一
            leftLis[2].className="bred"
        }else if(scroll>=3300&&scroll<4000){
            qc();                                       //大
            leftLis[3].className="bred"
        }else if(scroll>=4000&&scroll<4600){
            qc();                                       //波
            leftLis[4].className="bred"
        }else if(scroll>=4600&&scroll<5100){
            qc();                                       //判
            leftLis[5].className="bred"
        }else if(scroll>=5100&&scroll<5700){
            qc();                                       //断
            leftLis[6].className="bred"
        }else if(scroll>=5700&&scroll<6200){
            qc();                                       //实现导航跟滚动条同步
            leftLis[7].className="bred"
        }else if(scroll>=6200&&scroll<7400){
            qc();
            leftLis[8].className="bred"
        }else if(scroll>=7400&&scroll<8000){
            qc();
            leftLis[9].className="bred"
        }

    });
}
//左侧 lis菜单
function left_lis(){
    for(var y=0;y<spans.length;y++){
        spans[y].addEventListener("mouseover",function(){
            this.style.color="red";
        });
        spans[y].addEventListener("mouseout",function(){
            this.style.color="";
        });
    }
    for(var x=0;x<ctn_lis.length;x++){
        ctn_lis[x].setAttribute("index",x+1);
        ctn_lis[x].addEventListener("mouseover",function(){
            for(var j=0;j<ctn_lis.length;j++){
                ctn_lis[j].className="";
            }
            this.className="aa";
            po.src="link/link_"+[this.getAttribute("index")]+".png";
            po.style.display="block";
        });
        po.addEventListener("mouseout", function () {
            for (var j = 0; j < ctn_lis.length; j++) {
                ctn_lis[j].className = "";
            }
            po.style.display = "none";
        })
    }
}


//轮播图


function scroll_tp(){
    //函数aa 使图片轮播到最后一张时又从第一张开始
    function aa(){
        clean();//清除所有圆圈的样式
        if(k<8) {//第1-7张时每三秒到下一张
            k++;
            lis[k - 1].className = "active6";
            img.src = "images/scroll" + k + ".jpg";
        }else if(k==8){//第8张时下一张回到第1张
            k=1;
            lis[k - 1].className = "active6";
            img.src = "images/scroll" + k + ".jpg";
        }
    }

    //循环函数aa使图片开始轮播
    var scroll=setInterval(aa,3000);

    block(left,0.7,0.3);//鼠标放到左边时左边透明度0.6右边0.3
    block(right,0.3,0.7);//鼠标放到右边时右边透明度0.6左边0.3
    none(left);//鼠标移开左边时两边透明度为0
    none(right);//鼠标移开右边边时两边透明度为0

    //点击左侧滑动键使图片回到上一张
    left.addEventListener("click",function(){
        clean();
        k--;
        (k==0)?k=8:"";//判断 当图片到了第一张 下一张跳转到最后一张
        lis[k-1].className="active6";
        img.src="images/scroll"+k+".jpg";
    });
    //点击右侧侧滑动键使图片到下一张
    right.addEventListener("click",function(){
        aa();//调用上面的函数aa
    });
    //没给个中间的圆圈加上个鼠标事件mouseover
    for(var i=0;i<lis.length;i++){
        block(lis[i],0.3,0.3);//鼠标放到圆圈上时左边透明度0.3右边0.3
        lis[i].setAttribute("index4",i+1);//每个圆圈绑定个自定义属性
        lis[i].addEventListener("mouseover",function(){
            //在给圆圈加上样式之前 先清空所有圆圈的样式
            clean();
            this.className="active6";//给指到的圆圈加上样式
            var src=this.getAttribute("index4");//////调用自定义属性
            img.src="images/scroll"+src+".jpg";////使用自定义属性使图片合圆圈同步
            clearInterval(scroll);//执行鼠标事件时让自动轮播停止
            k=parseInt(this.getAttribute("index4"));//当结束事件时从新给自动轮播一个起点
        });
    }
    block(ul,0.3,0.3);
    block(img,0.3,0.3);//鼠标放到图片时左边透明度0.3右边0.3
    none(img);//鼠标移开图片时透明度为0；
}

