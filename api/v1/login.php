<?php
header('Access-Control-Allow-Origin:*');
include("../db.php");

$username = $_POST['username'];
$password = $_POST['password'];

$sqlName = "select * from userinfo where username='$username' or email='$username'";
$resName =  mysql_query($sqlName);
if($rowName = mysql_fetch_assoc($resName)){
	$sql = "select * from userinfo where username='$username' and password='$password' or email='$username' and password='$password'";
	$res = mysql_query($sql);
	if($row = mysql_fetch_assoc($res)){
		$arr = array('res_code' => 1, 'res_body' => $row);
		echo json_encode($arr);
	}else{
		$arr = array('res_code' => 0, 'res_body' => '密码错误');
		echo json_encode($arr);
	};
}else{
	$arr = array('res_code' => 0, 'res_body' => '用户名不存在');
		echo json_encode($arr);

};


/*$sql = "select * from userinfo where username='$username' or username='$email' and password='$password'";

$res = mysql_query($sql);

//如果$res有结果，那么只有一条
if($row = mysql_fetch_assoc($res)){
	$arr = array('res_code' => 1, 'res_body' => $row);
}else{

	$arr = array('res_code' => 0, 'res_body' => '用户名不存在');
}*/

// echo json_encode($arr);
?>