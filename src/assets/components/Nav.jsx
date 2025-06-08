import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="side-nav">
      <div className="logo">
        <img src="/venti-icon.svg" alt="Venti" className="nav-icon" /> 
        <span className="logo-text">Ventixe</span>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">
          <img src="/ticket-icon.svg" alt="Venti" className="nav-icon" />
          <span className="nav-label">Events</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav