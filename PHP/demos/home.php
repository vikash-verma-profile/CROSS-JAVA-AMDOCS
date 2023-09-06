<?php

class Employee {
    public $EmployeeName;
    public $EmployeeSalary;
    public function __construct($EmployeeName,$EmployeeSalary)
    {
        $this->EmployeeName=$EmployeeName;
        $this->EmployeeSalary=$EmployeeSalary;
    }

    public function PrintEmployeeData(){
        return "<h2>EmployeeName : </h2><h5 style='color:red'>".$this->EmployeeName.
        "</h6><br/> <h2>EmployeeSalary</h2> :".$this->EmployeeSalary;
    }
}

$Emp=new Employee("Vikash Verma","20000");
echo $Emp->PrintEmployeeData();
// echo "Hi";

?>