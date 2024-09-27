import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from '../../redux/apiCalls.js'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispetch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        login(dispetch, { username, password });
    }

    return (
        <div>
            <h1>DashBoard Login</h1>
            <div>
                <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button type='submit' onClick={handleClick}>Login</button>
            </div>
        </div>
    )
}

export default Login
