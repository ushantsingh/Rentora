import React from 'react'
import "./App.css"
import Nav from './components/nav/Nav'
import { Outlet } from 'react-router'
import Listing from './components/listing/Listing'
import Contact from './components/contactus/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
