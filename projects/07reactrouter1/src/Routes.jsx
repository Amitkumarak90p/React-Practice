import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router'

function Routes() {
  return (
    <>
        <Header />
            <Outlet />
        <Footer />    
    </>
  )
}

export default Routes