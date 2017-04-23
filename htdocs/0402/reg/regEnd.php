<?php
$pdo=new PDO("mysql:host=localhost;dbname=member",'root',"");
$sql="insert into member(username,pwd,email,icon,regTime)values('".$_POST['username']."','".md5($_POST['pwd'])."','".$_POST['email']."','".$_FILES['icon']['name']."',now())";
//echo $sql;
$result=$pdo->query($sql);
if($result){
    echo "added";
}else{
    echo "added_failed";
}
//把临时文件存储为1.jpg
$uploads="uploads";
//如果文件或目录不存在
if(!file_exists($uploads)){
    //创建目录
    mkdir($uploads);
}
//判断是否上传成功
move_uploaded_file($_FILES['icon']['tmp_name'],$uploads."/".$_FILES['icon']['name']);
?>