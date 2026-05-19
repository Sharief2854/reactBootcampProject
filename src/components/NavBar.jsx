import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/reg">Reg</Link>
    </div>
  )
}

export default NavBar