import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h2>Horizon Courts</h2>

      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li> <NavLink to="/service">Service</NavLink></li>
        <li> <NavLink to="/coaches">Coaches</NavLink></li>
        <li> <NavLink to="/events">Events</NavLink></li>
        <li> <NavLink to="/contact">Contact</NavLink></li>

      </ul>

      <button>Book now</button>
    </nav>


  )
}

export default Nav
