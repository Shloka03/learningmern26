import React from 'react'
import { CardComponent } from './CardComponent'

export const FunctionDemo1 = () => {
    const test=()=>{
        alert("test function is called....")
    }
    const test2=(x)=>{
        alert("value of x "+x)
    }
  return (
    <div>
        <h1>FunctionDemo1</h1>
        <button onClick={test}>CLICK</button>
        {/*wrapper function use*/}
        <button onClick={()=>{test2(100)}}>CLICK2</button>
        <CardComponent title="FUN DEMO 1" description='FUN DEMO 1 component'></CardComponent> 
    </div>
  )
}
