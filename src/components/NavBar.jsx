import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

function NavBar() {
  let navigate = useNavigate();
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/reg">Reg</Link>
    </div>
  )
}

export default NavBar