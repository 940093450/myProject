<?php
$pdo=new PDO("mysql:host=localhost;dbname=member",'root',"");
//select * from member where username='liu' and pwd=md5('123456')
$sql="select * from member where username='".$_POST['username']."' and pwd='".md5($_POST['pwd'])."'";
$query=$pdo->query($sql);
$oneUser=$query->fetchObject();
if($oneUser){
    echo "ok";
}else{
    echo "failed";
}
?>