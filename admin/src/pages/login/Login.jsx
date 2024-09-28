import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from '../../redux/apiCalls.js'
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispetch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        login(dispetch, { username, password });
    }

    return (
        <div className='loginDiv'>
            <div className='wrapper'>
                <h1>DashBoard Login</h1>
                <div className='loginForm'>
                    <input className='inputBox ' type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                    <input className='inputBox ' type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <button className='loginButton' type='submit' onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
