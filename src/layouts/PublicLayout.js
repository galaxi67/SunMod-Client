import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Whatsapp from '../components/WhatsApp'
import ScrollTop from '../components/ScrollTop'

const PublicLayout = () => {
  return (
    <div className='public-layout'>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Whatsapp />
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default PublicLayout
