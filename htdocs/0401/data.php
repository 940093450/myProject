<?php
sleep(3);
/*//延迟代码执行

//输出morning字符串
//echo "morning"
//接收的是post传的值
echo "<pre>";
print_r($_POST);
print_r($_FILES);
echo "</pre>";
//以get方式传的值
//echo $_GET['username']."===".$_GET['pwd']*/


$uploads="uploads";
//如果文件或者目录不存在
if(!file_exists($uploads)){
    //创建目录
    mkdir($uploads);
}
if(move_uploaded_file($_FILES['icon']['tmp_name'],$uploads."/".$_FILES['icon']['name'])){
    echo "ok";
}else{
    echo "no";
}
?>