import React, { useState } from 'react';
import axios from 'axios';
import "./sign.css";
import TextField from '@mui/material/TextField';
import phone from "../assets/phonePic.png";
import {jwtDecode} from 'jwt-decode'

const Login = () => {
    
    const [telmail, setTelMail] = useState('');
    const [password, setPassword] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/users/login', { telmail, password });
            const { token } = response.data;
            console.log(response.data);
            console.log("response.data passed from here");
            localStorage.setItem('jwtToken', token);
            

            
            const decodedToken = jwtDecode(token);
            setUserInfo(decodedToken);

            console.log('Login successful', decodedToken);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    console.log(telmail);
    console.log(password);
    console.log(userInfo);

    return (
        <div style={{ display: "grid" }}>
            <form onSubmit={handleLogin}>
                <div style={{ display: "grid" }}>
                    <img style={{ marginLeft: "0%", marginTop: "5%", height: "100%" }} src={phone} alt="" />
                    <div className='inputSignUp'>
                        <div style={{ margin: "70px" }}>
                            <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif" }}>Log in to Exclusive</h2>
                            <p style={{ fontFamily: 'Trebuchet MS, sans-serif', fontSize: "17px" }}>Enter your details below</p>
                        </div>
                        <TextField 
                            id="phone/mail" 
                            label="Email or Phone Number" 
                            variant="standard" 
                            onChange={(e) => setTelMail(e.target.value)} 
                        />
                        <TextField 
                            id="password" 
                            label="Password" 
                            variant="standard" 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <div className='loginbuttons'>
                        <button className='Loginbutton' type="submit">Log in</button>
                        <button className='forgetButton' type="button">Forget Password?</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
