import React from 'react'

export const MapDemo1 = () => {
    let cars=["audi","bmw","mercedes","porshe","xuv"]
  return (
    <div>
        <h1>Map Demo1</h1>
        {
            cars.map((c)=>
            {
                return <h1>{c}</h1>
            })
        }

    </div>
  )
}
