import React from 'react'

export const MapDemo9 = () => {

    var things=[
        {id:1,name:"bag",price:900,colour:"blue",brand:"safari"},
        {id:2,name:"car",price:900000,colour:"black",brand:"punch"},
        {id:3,name:"pencil",price:15,colour:"red",brand:"natraj"},
        {id:4,name:"eraser",price:10,colour:"white",brand:"apsara"},
        {id:5,name:"mobile",price:90000,colour:"blue",brand:"samsungs24ultra"},
    ]
  return (
    <div>
        <h1>Map Demo9</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>COLOUR</th>
                    <th>BRAND</th>
                    
                    
                </tr>
            </thead>
            <tbody>
              {
                things.map((thi) => {
                  return <tr style={{backgroundColor:thi.brand=="punch" && "blue"}}>
                            <td style={{backgroundColor:thi.id>4 && "pink"}}>{thi.id}</td>
                            <td style={{color:thi.name=="mobile" && "green"}}>{thi.name}</td>
                            <td style={{backgroundColor:thi.price==10 && "grey"}}>{thi.price}</td>
                            <td style={{color:thi.colour=="red" && "magenta"}}>{thi.colour}</td>
                            <td>{thi.brand}</td>
                            
                            </tr>
                            
                            
                })
              }
            </tbody>
            </table>
    </div>
  )
}
