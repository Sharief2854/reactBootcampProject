import React from 'react'
import { useState } from 'react'

import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom"

function Reg() {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [number, setnumber] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    let navigate=useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        // validations
        if(name.trim()=="" || email=="" || number=="" || password=="" || confirmPassword==""){
            alert("please fill all the details");
            return;
        }
        if(password!=confirmPassword){
            alert("Password is not matching")
            return;
        }
        // regex
        let obj={
            name,
            email,
            number,
            password
        }
        console.log(obj);
        alert("reg successfull!!!!!");
        // redirect Login
        navigate("/login")

        setname("");
        setemail("");
        setpassword("");
        setconfirmPassword("")
        setnumber("")
    }   

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <input type="text"  placeholder='Enter Name' onChange={(event)=>setname(event.target.value)} value={name}/>
            <input type="email" placeholder='enter email' onChange={(event) => setemail(event.target.value)}  value={email}/>
            <input type="number" placeholder='enter number' onChange={(event) => setnumber(event.target.value)} value={number}/>
            <input type="password" placeholder='enter password' onChange={(event) => setpassword(event.target.value)} value={password}/>
            <input type="password" placeholder='Retype password' onChange={(event) => setconfirmPassword(event.target.value)} value={confirmPassword} />
            <button className='btn'>Reg Now</button>
            <p>
                already registered? 
                <Link to="/login">Login</Link>
            </p>
        </form>
    </div>
  )
}

export default Reg