import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import useScrollTop from '../../hooks/useScrollTop'
import useLenis from '../../hooks/useLenis'

const Layout = () => {
  const lenisRef = useLenis();

  useScrollTop(lenisRef);

  return (
    <div>
        <Navbar/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout