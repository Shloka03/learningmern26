import React from 'react'

export const MapDemo2 = () => {

    var users =[
        {id:1,name:"tom",age:23,gender:"male"},
        {id:2,name:"bob",age:24,gender:"male"},
        {id:3,name:"george",age:25,gender:"male"}
    ]
  return (
    <div>
        <h1>Map Demo2</h1>
        {
            users.map((user)=>
            {
                return <li>{user.id} -{user.name} {user.age} -{user.gender}</li>

            })

        }
    </div>
  )
}
