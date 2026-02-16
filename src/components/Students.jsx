import React from 'react'
import { StudentsList } from './StudentsList'

export const Students = () => {
    var title="STUDENT APP"
    
    var school={
        name:"DPS",
        year:"2003"
    }
    var students = [
        {id:1,name:"tom",age:11},
        {id:2,name:"bob",age:12},
        {id:3,name:"sandy",age:13},
        {id:4,name:"ben",age:15},
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Students</h1>
        <StudentsList title={title} school={school} students={students}></StudentsList>
    </div>
  )
}
