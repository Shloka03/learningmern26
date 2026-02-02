import React from 'react'

export const MapDemo2 = () => {

    var users =[
        {id:1,name:"abc",age:23,gender:"male"},
        {id:2,name:"bcd",age:24,gender:"male"},
        {id:3,name:"aby",age:25,gender:"male"}
    ]
  return (
    <div>
        <h1>Map Demo2</h1>
        {
            users.map((u)=>
            {

            })

        }
    </div>
  )
}
