<?php

$server="localhost";
$username="root";
$password="";
$dbName="test";
$conn=new mysqli($server,$username,$password,$dbName);
if($conn->connect_error){
die("connection failed".$conn->connect_error);
}
$sql="Insert into employee(EmployeeName,EmployeeSalary) 
values( '".$_POST["EmployeeName"]."','".$_POST["EmployeeSalary"]."')";
if($conn->query($sql)==TRUE){
    echo "New record added";
}
else{
    echo "failed to add a record";
}

?>