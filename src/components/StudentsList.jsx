import React from 'react'
import { SubStudents } from './SubStudents'

export const StudentsList = (props) => {
    console.log("stulist",props)
  return (
    <div style={{textAlign:"center"}}>
        <h1>StudentsList</h1>
        {props.title}
        <h1>{props.school.name}</h1>
        <h1>{props.school.year}</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.students.map((stu)=>{
                        return <tr>
                            <td>{stu.id}</td>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                        </tr>
                    })
                }
                
            </tbody>
        </table>
        <SubStudents title={props.title}></SubStudents>
    </div>
  )
}
