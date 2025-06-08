import React from 'react'

const Header = () => {
  return (
    <header className="page-header">
     <nav className="breadcrumb">
      <span className="breadcrumb-parent">Dashboard</span>
      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-current">Events</span>
     </nav>
     <h4 className="page-title">Events</h4>
    </header>
  )
}

export default Header