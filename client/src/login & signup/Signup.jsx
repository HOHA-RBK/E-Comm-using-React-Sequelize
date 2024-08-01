import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./sign.css"
import TextField from '@mui/material/TextField';
import phone from "../assets/phonePic.png"
const Signup = () => {
  const [name, setName] = useState('');
  const [telmail, setTelMail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [menu,setMenu]=useState(false)

 

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  const handlemenu =()=>{
    setMenu(true)
    console.log(menu)
    
  }
  
  useEffect(() => {
    if (password) {
      handlemenu();
    }
  }, [password]);


  const handleSignUp = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      telmail: telmail,
      password: password,
      role: role,
    };
    
    axios.post('http://localhost:3001/users/register/', {name: name,telmail: telmail, password: password  })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(name)
  console.log(telmail)
  console.log(password)
  console.log(role)

  return (
    <div style={{display:"grid" }}>
      
      
      <form onSubmit={handleSignUp}>
       <div style={{display:"grid"}}>
        
       <img style={{marginLeft:"0%", marginTop:"5%", height:"100%"}} src={phone} alt="" />
       <div className='inputSignUp'>
        <div style={{margin : "0"}} >
       <h1>Create an account</h1>
       <h5>Enter yourt details below</h5>
       </div>
        <TextField id="name" label="name" variant="standard" onChange={(e) => setName(e.target.value)} />
        <TextField id="phone/mail" label="Email or Phone Number   " variant="standard"onChange={(e) => setTelMail(e.target.value)} />
        <TextField id="password" label="password" variant="standard" onChange={(e) => setPassword(e.target.value)}  />
        </div>
        

        </div>
        <div className='buttons' >
        <button className='submitbutton' type="submit">Create Account</button>
        <button className="google-button" >
      <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" className="google-logo" />
      <span className="google-text">Sign in with Google</span>
    </button>
        </div>
       
        <div className='roleOption'  >
  {menu ? (
    
    <select name="role" id="role" onChange={handleRole}>
      <option value="Customer">Customer</option>
      <option value="Seller">Seller</option>
    
      
    </select> ) : (<></>)}
  
</div>
      </form>
      
    </div>
    
  );
};

export default Signup;


  {/* <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        /> */}
        {/* <input
          type="text"
          name="email"
          id="email"
          placeholder="Email or Phone Number"
          onChange={(e) => setTelMail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /> */}