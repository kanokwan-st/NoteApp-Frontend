import React from 'react'
import { Outlet, Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='min-h-screen bgBlue text-white font-medium'>
      <nav className='flex items-center gap-4 h-15 p-4 bgPurple'>
        <Link to="/" className=''>Home</Link>
        <Link to="/mynote">My Note</Link>
      </nav>
      <Outlet />
    </div>
  )
}
