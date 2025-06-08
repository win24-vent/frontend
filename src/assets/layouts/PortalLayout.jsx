import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'


const PortalLayout = () => {
  return (
    <div className="portal-wrapper">

        <Nav />

      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default PortalLayout