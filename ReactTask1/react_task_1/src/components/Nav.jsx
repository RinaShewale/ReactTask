import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <h2>Horizon Courts</h2>

      <ul>
        <li>
          <NavLink to="/" style={({ isActive, }) =>
            isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }
          }>
            Home
          </NavLink>
        </li>

        <li
        ><NavLink to="/about" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/service" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
            Service
          </NavLink>
        </li>

        <li>
          <NavLink to="/coaches" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
            Coaches
            </NavLink>
        </li>


        <li>
          <NavLink to="/events" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
            Events
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }}>
            Contact
          </NavLink>
        </li>

      </ul>

      <button>Book now</button>
    </nav>


  )
}

export default Nav
