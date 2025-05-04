import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar'

export default function Layout() {
  return (
    <div className='relative min-h-screen textBlue font-medium'>
      <div className='sticky top-0 z-10 text-white'>
        <Navbar />
      </div>
      <Outlet />
    </div>
  )
}
