import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function NavBar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  }

  return (
    <div>
      <nav className='flex items-center justify-between h-18 p-4 px-12 text-lg bg-[linear-gradient(135deg,_#392F5A_25%,_#FF677D_90%)] shadow-xl '>
        <div className='flex gap-14'>
          <Link to="/" className='font-bold'>📝 My Note App</Link>
          <p>{user?.email}</p>
        </div>
        <div className='flex items-center gap-10'>
          <Link to="/" className=''>Home</Link>
          {user? (
            <>
              <Link to="/mynote" >My Note</Link>
              <Link to="/profile" >Profile</Link>
              <Link to="/login" onClick={handleLogout}>Logout</Link>
            </>
          ) :
          <>
            <Link to="/register" >Register</Link>
            <Link to="/login" >Login</Link>
          </>
          }
        </div>
      </nav>
    </div>
  )
}
