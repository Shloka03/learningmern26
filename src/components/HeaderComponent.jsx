import React from 'react'
import "../assets/css/header.css"
import virat from "../assets/images/virat.jpg"

export const HeaderComponent = () => {
  return (
    <div className='header'>
        
        <h1>Virat Kohli</h1>
        <img src={virat} alt='Virat Kohli' className='virat' />
    </div>
  )
}
