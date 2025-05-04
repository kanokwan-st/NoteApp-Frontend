import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
      <nav className='flex items-center justify-between h-18 p-4 px-12 text-lg bg-[linear-gradient(135deg,_#392F5A_25%,_#FF677D_90%)] shadow-xl '>
        <div>
          <Link to="/" className='font-bold'>My Note App</Link>
        </div>
        <div className='flex items-center gap-4'>
          <Link to="/" className=''>Home</Link>
          <Link to="/mynote" >My Note</Link>
          <Link to="/profile" >Profile</Link>
        </div>
      </nav>
    </div>
  )
}
