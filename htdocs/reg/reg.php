<?php
$pdo=new PDO("mysql:host=localhost;dbname=member","root","");
//如果是验证用户名
if($_POST['flag']=="checkusername"){
    $sql="select * from member where username='".$_POST['username']."'";
    $query=$pdo->query($sql);
    $username=$query->fetchObject();
    if($username){
        echo "taken";
    }else{
        echo "available";
    }
}
//注册
if($_POST['flag']=='reg'){
    $sql="insert into member(username,pwd)values('".$_POST['username']."','".md5($_POST['pwd'])."')";
    $result=$pdo->query($sql);
    if($result){
        echo "ok";
    }else{
        echo "failed";
    }
}
?>