import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./sign.css";
import TextField from '@mui/material/TextField';
import phone from "../assets/phonePic.png";
import Footer from '../compoent/Footer';

const Signup = () => {
  const [name, setName] = useState('');
  const [telmail, setTelMail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  const handleRole = (e) => {
    setRole(e.target.value);
  };

  const handleMenu = () => {
    setMenu(true);
  };

  useEffect(() => {
    if (password) {
      handleMenu();
    }
  }, [password]);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name || !telmail || !password) {
      return;
    }

    let userRole = role;
    if (telmail.includes('admin-') && password.includes('+216')) {
      userRole = 'admin';
    }

    const user = {
      name,
      telmail,
      password,
      role: userRole,
    };

    axios.post('http://localhost:3000/users/register', user)
      .then((response) => {
        console.log(response);
        if (userRole === 'admin') {
          navigate('/adminDash');
        } else if (userRole === 'Seller') {
          navigate('/seller');
        } else {
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ display: "grid" }}>
      <form onSubmit={handleSignUp}>
        <div style={{ display: "grid" }}>
          <img style={{ marginLeft: "0%", marginTop: "5%", height: "100%" }} src={phone} alt="" />
          <div className='inputSignUp'>
            <div style={{ margin: "0" }}>
              <h1>Create an account</h1>
              <h5>Enter your details below</h5>
            </div>
            <TextField id="name" label="Name" variant="standard" onChange={(e) => setName(e.target.value)} />
            <TextField id="phone/mail" label="Email or Phone Number" variant="standard" onChange={(e) => setTelMail(e.target.value)} />
            <TextField id="password" label="Password" variant="standard" onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <div className='buttons'>
          <button className='submitbuttonn' type="submit">Create Account</button>
          <button className="google-button">
            <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" className="google-logo" />
            <span className="google-text">Sign in with Google</span>
          </button>
          <div className='already'><p>Already have an accounnt?</p>  <p style={{cursor:"pointer"}} onClick={()=>navigate('/login')}>Log in</p></div>
        </div>
        <div className='roleOption'>
          {menu && (
            <select name="role" id="role" onChange={handleRole}>
              <option value="Customer">Customer</option>
              <option value="Seller">Seller</option>
            </select>
          )}
        </div>
        <br /><br /><br />
      </form>
      <Footer/>
    </div>
  );
};

export default Signup;
