import React from 'react'

export const MapDemo8 = () => {
    var animals=[
        {id:1,name:"horse",colour:"brown",eyes:"brown"},
        {id:2,name:"cow",colour:"white",eyes:"black"},
        {id:3,name:"lion",colour:"yellowbrown",eyes:"brown"},
        {id:4,name:"cat",colour:"black",eyes:"green"},
        {id:5,name:"dog",colour:"brown",eyes:"brown"},

    ]
  return (
    <div>
        <h1>Map Demo8</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>COLOUR</th>
                    <th>EYES</th>
                    
                    
                </tr>
            </thead>
            <tbody>
              {
                animals.map((an) => {
                  return <tr style={{backgroundColor:an.eyes=="green" && "blue"}}>
                            <td style={{backgroundColor:an.id<2 && "lightblue"}}>{an.id}</td>
                            <td style={{color:an.name=="cow" && "burlywood"}}>{an.name}</td>
                            
                            <td style={{color:an.colour=="brown" && "magenta"}}>{an.colour}</td>
                            <td>{an.eyes}</td>
                            
                            </tr>
                            
                            
                })
              }
            </tbody>
            </table>
    </div>
  )
}
