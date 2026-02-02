import React from 'react'
import "../assets/css/header.css"
import virat from "../assets/images/virat.jpg"

export const HeaderComponent = () => {
  return (
    <div className='header'>
        
        <h1>MERN Project</h1>
        <img src={virat} alt='Virat Kohli' className='virat' />
    </div>
  )
}
