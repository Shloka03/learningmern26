import React from 'react'
import logo3 from "../assets/images/logo3.png"
export const MapDemo7 = () => {
  var cartoon=[
    {id:1,name:"shinchan",channel:"hungama",time:6,genre:"comedy"},
    {id:2,name:"chotabheem",channel:"pogo",time:4,genre:"drama"},
    {id:3,name:"doremon",channel:"hungama",time:9,genre:"funny&drama"},
    {id:4,name:"ninjahatori",channel:"nicklodean",time:8,genre:"comedy"},
    {id:5,name:"thomas&friends",channel:"pogo",time:2,genre:"funny"}
  ]
  return (
    <div>
        <h1>Map Demo7</h1>
        <img src={logo3} alt='sym' className='logo3'/>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>CHANNEL</th>
                    <th>TIME</th>
                    <th>GENRE</th>
                    
                </tr>
            </thead>
            <tbody>
              {
                cartoon.map((ct) => {
                  return <tr style={{backgroundColor:ct.channel=="pogo" && "pink"}}>
                            <td>{ct.id}</td>
                            <td>{ct.name}</td>
                            <td>{ct.channel}</td>
                            <td style={{color:ct.time>50 && "magenta"}}>{ct.time}</td>
                            <td style={{backgroundColor:ct.genre=="comedy" && "skyblue"}}>{ct.genre}</td>
                            </tr>
                            
                            
                })
              }
            </tbody>
            </table>

    </div>
  )
}
