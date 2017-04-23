<?php
//延迟代码执行
sleep(3);
//以数组形式输出变量信息
//$_POST能获取所有已post方式提交的数据;
//echo "<pre>";
//print_r($_POST);
//$_FILES获取上传文件的数据
//print_r($_FILES);
//echo "</pre>";
//上传：把临时文件移动到指定的地址
/*
Array
(
    [icon] => Array
        (
            [name] => AdvVideoDev.dll
            [type] => application/x-msdownload
            [tmp_name] => C:\xampp\tmp\phpB67C.tmp
            [error] => 0
            [size] => 448192
        )

)
//$_FILES['icon'][tmp_name]临时文件名
//$_FILES['icon'][name]原文件名
*/
//把临时文件存储为1.jpg
$uploads="uploads";
//如果文件或目录不存在
if(!file_exists($uploads)){
    //创建目录
    mkdir($uploads);
}
//判断是否上传成功
move_uploaded_file($_FILES['icon']['tmp_name'],$uploads."/".$_FILES['icon']['name']);
/*if(move_uploaded_file($_FILES['icon']['tmp_name'],$uploads."/".$_FILES['icon']['name'])){
    echo "ok";
}else{
    echo "failed";
}*/
?>










