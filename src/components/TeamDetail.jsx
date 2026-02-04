import React from 'react'
import { useParams } from 'react-router-dom'

export const TeamDetail = () => {
    const team=useParams().name
  return (
    <div style={{textAlign:"center"}}>
        <h1>PLAYING....{team}</h1>
        
    </div>
  )
}
