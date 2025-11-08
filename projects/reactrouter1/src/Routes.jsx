import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router'

function Route() {
  return (
    <>
        <Header />
            <Outlet />
        <Footer />    
    </>
  )
}

export default Route