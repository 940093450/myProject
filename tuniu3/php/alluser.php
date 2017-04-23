<?php
$pdo=new PDO("mysql:host=localhost;dbname=member",'root',"");
$sql="select * from member order by id desc";
$query=$pdo->query($sql);
$data=$query->fetchAll(PDO::FETCH_OBJ);
echo json_encode($data);
?>