import axios from 'axios'
import React from 'react'

export const ApiDemo2 = () => {
    const addUser = async()=>{
         const userObj = {
            name:"hiya",
            age:23,
            email:"hiya1@gmail.com",
            password:"hiya@123",
            isActive:true
         }
         try{
            const res = await axios.post("https://node5.onrender.com/user/user/",userObj)
            console.log(res)
            console.log(res.data)
            
            
         }
         catch(err){
            console.log(err)
            alert("error while adding user")
         }
    }
  return (
    <div>
        <h1>ApiDemo2</h1>
        <button onClick={()=>{addUser()}}>ADD</button>
    </div>
  )
}
