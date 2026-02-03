import React from 'react'
import "../assets/css/header.css"
import mernlogo from "../assets/images/mernlogo.jpg"

export const HeaderComponent = () => {
  return (
    <div className='header'>
        
        <h1>MERN Project</h1>
        <img src={mernlogo} alt='mernstack' className='mernlogo' />
    </div>
  )
}
