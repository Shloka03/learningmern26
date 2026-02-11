import React, { useState } from 'react'

export const UseStateDemo2 = () => {
    const[loading,setloading]=useState(true)
    const stopLoader = () =>{
        setloading(false)
    }
  return (
    <div>
        <h1>UseStateDemo2</h1>
        {
            loading == true && <h1>Loading.....</h1>
        }
        <button onClick={stopLoader}>STOP</button>
    </div>
  )
}
