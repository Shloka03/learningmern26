import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const[users,setUsers]=useState(["parth","raj"]);
    const addUser = () =>{
        setUsers([...users,"abc"])
    }
  return (
    <div>
        <h1>UseStateDemo3</h1>
        {
            users.map((u) =>{
                return<li>{u}</li>
            })
        }
        <button onClick={addUser}>push</button>
    </div>
  )
}
