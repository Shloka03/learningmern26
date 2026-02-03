import React from 'react'
import symbol from "../assets/images/symbol.png"

export const MapDemo6 = () => {

    var subjects =[
        {id:1,name:"maths",topic:"algebra",credit:50,level:"hard",book:"textbook",image:symbol},
        {id:2,name:"english",topic:"noun",credit:30,level:"medium",book:"grammar",image:symbol},
        {id:3,name:"computer",topic:"java",credit:90,level:"hard",book:"textbook",image:symbol},
        {id:4,name:"hindi",topic:"sangnya",credit:70,level:"easy",book:"grammar"},
        {id:5,name:"social science",topic:"history",credit:100,level:"medium",book:"referencebook",image:symbol},
        {id:6,name:"science",topic:"plants",credit:80,level:"easy",book:"textbook",image:16}
    ]
  return (
    <div style={{textAlign:"center"}}>
        <h1>Map Demo6</h1>
        <img src={symbol} alt='sym' className='symbol'/>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>TOPIC</th>
                    <th>CREDIT</th>
                    <th>LEVEL</th>
                    <th>BOOK</th>
                    <th>IMAGE</th>
                </tr>
            </thead>
            <tbody>
                {
                    subjects.map((sb) => {
                        return <tr style={{backgroundColor:sb.topic=="java" && "green"}}>
                            <td>{sb.id}</td>
                            <td>{sb.name}</td>
                            <td>{sb.topic}</td>
                            <td style={{color:sb.credit>50 && "magenta"}}>{sb.credit}</td>
                            <td style={{backgroundColor:sb.level=="hard" && "skyblue"}}>{sb.level}</td>
                            <td style={{color:sb.book=="grammar" && "blueviolet"}}>{sb.book}</td>
                            
                            <td>
                                {
                                    sb.image ? (
                                <img src={symbol} alt='sym'width="40" height="40" />) : (
                                    <span style={{color:"red",fontWeight:"bold"}}>Image is missing</span>
                                )
                                }
                            </td>
                            
                        </tr>
                    })
                }
            </tbody>
        </table>


    </div>
  )
}
