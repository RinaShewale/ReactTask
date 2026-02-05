import React from 'react'
import {useNavigate} from "react-router-dom"

const Notfound = () => {
  const navigate = useNavigate()
   const handleHomeClick = () => {
navigate('/');
    }
  return (
      <div className="notfound-wrapper">
      <div className="notfound-container">
        <div className="notfound-content">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>The page you are looking for does not exist.</p>

         <button className='home-btn' onClick={handleHomeClick} >Go Back Home</button>
        </div>
      </div>
    </div>
  )
}

export default Notfound
