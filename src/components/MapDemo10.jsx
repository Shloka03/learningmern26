import React from 'react'

export const MapDemo10 = () => {
    var laptop=[
        {id:1,name:"lenovo",price:"70000",colour:"black",type:"touchscreen"},
        {id:2,name:"dell",price:"50000",colour:"grey",type:"withouttouch"},
        {id:3,name:"asus",price:"90000",colour:"blue",type:"gamingtouch"},
        {id:4,name:"hp",price:"60000",colour:"white",type:"touchscreen"},
        {id:5,name:"apple",price:"100000",colour:"grey",type:"touchscreenwithpen"},
        {id:6,name:"samsung",price:"80000",colour:"black",type:"withouttouch"},
    ]
  return (
    <div>
        <h1>Map Demo10</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>COLOUR</th>
                    <th>TYPE</th>
                    
                    
                </tr>
            </thead>
            <tbody>
              {
                laptop.map((lp) => {
                  return <tr style={{backgroundColor:lp.type=="gamingtouch" && "blue"}}>
                            <td style={{backgroundColor:lp.id>4 && "pink"}}>{lp.id}</td>
                            <td style={{color:lp.name=="apple" && "red"}}>{lp.name}</td>
                            <td style={{backgroundColor:lp.price==50000 && "grey"}}>{lp.price}</td>
                            <td style={{color:lp.colour=="white" && "magenta"}}>{lp.colour}</td>
                            <td>{lp.type}</td>
                            
                            </tr>
                            
                            
                })
              }
            </tbody>
            </table>

    </div>
  )
}
