<?php
$pdo=new PDO("mysql:host=localhost;dbname=member",'root',"");
//输出post获取的值
//设计根据用户名查询数据的sql语句
$sql="select * from member where username='".$_POST['username']."'";
//echo $sql;
//在数据库中执行sql
$result=$pdo->query($sql);
$data=$result->fetchObject();
//var_dump($data);
if($data){
    echo "taken";
}else{
    echo "available";
}
?>