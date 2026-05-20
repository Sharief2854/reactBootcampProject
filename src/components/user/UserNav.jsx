import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function UserNav() {

    let navigate=useNavigate();

  return (
    <div className='nav'>
        <Link to="">Home</Link>
          <button
              onClick={() => navigate("/userDashboard/cart")}
          >
              Cart
          </button>

    </div>
  )
}

export default UserNav