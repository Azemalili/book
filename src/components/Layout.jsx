import React from 'react'
import NavScrollExample from './NavScrollExample'
import { Outlet } from 'react-router'
import Footer from './Footer'

function Layout() {
  return (
    <div>
        <NavScrollExample />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout