<?php
$pdo=new PDO("mysql:host=localhost;dbname=member",'root',"");
$sql="delete from member where id=".$_POST['id'];
$result=$pdo->query($sql);
if($result){
    echo "ok";
}else{
    echo "failed";
}
?>