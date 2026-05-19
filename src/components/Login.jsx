import React from 'react'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    // validations
    if ( email == "" || password == "") {
      alert("please fill all the details");
      return;
    }
   
    // regex
    let obj = {
      email,
      password
    }
    console.log(obj);

    // From BE will get token
    // store token in local storage
    let token="kjhgfds@#$%^&*mn45678oiuy987654"
    localStorage.setItem("token",token);

    alert("login successfull!!!!!");
    // redirect Login
    navigate("/userDashboard");

    setemail("");
    setpassword("");
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input type="email" placeholder='enter email' onChange={(event) => setemail(event.target.value)} value={email} />
        <input type="password" placeholder='enter password' onChange={(event) => setpassword(event.target.value)} value={password} />
        <button className='btn'>Login Now</button>
        <p>
          Not registered?
          <Link to="/reg">Reg</Link>
        </p>
      </form>
    </div>
  )
}

export default Login