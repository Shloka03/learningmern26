import React from 'react'
import { EmployeeList } from './EmployeeList';

export const Employees = () => {
    var title = "EMPLOYEE APP";

    var company = {
        name : "TCS",
        year : "2026",
    };

    var employees = [
        {id:101,name:'ishani',age:23},
        {id:102,name:'helly',age:24},
        {id:103,name:'jaya',age:25},
        {id:104,name:'shivani',age:23},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Employees</h1>
        <EmployeeList title ={title} company={company} employees={employees}></EmployeeList>
    </div>
  )
}
