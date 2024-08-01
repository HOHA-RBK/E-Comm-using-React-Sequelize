import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
const NavBar = () => {
    const[One,SetOne]=useState([])
  const [name,setame]=useState('')
const GetOne=(name)=>{
axios.get(`http://localhost:3000/category/getOne/${name}`)
.then((data)=>{
console.log(data.data)
SetOne(data.data)
})
.catch((err)=>{
    console.error(err)
})


}
    return (
        <>
        <div className='black'>
<h6 className='textBlack'>Summer Sale For All Suits And Free Express Delivery - OFF 50%! <p className='mot'>ShopNow</p>  </h6>
        </div>
           <nav className="navbar">
            <h1 className='name'>Exclusive</h1>
            <ul className="nav-list">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                <li className="nav-item"><Link to="/signup" className="nav-link">SignUp</Link></li>
            </ul>
       <div  className='search' >
       <input className='searchbar' type="text" placeholder="What Are You Loking For ?" onChange={(e)=>{setame(e.target.value)}}></input>
       {One? (<h1 className='ret'>{One.name}</h1>): (<h1>not found</h1>)}

       <FontAwesomeIcon icon={faSearch} className='fasearch' onClick={()=>{GetOne(name),console.log(One.data, "YOYO data")}}/>
       <FontAwesomeIcon icon={faHeart} className='faheart'/>
       <FontAwesomeIcon icon={faShoppingCart} className='fashop'/>
       
      
       </div>
        
        
        </nav>
        </>

     
    );
};

export default NavBar