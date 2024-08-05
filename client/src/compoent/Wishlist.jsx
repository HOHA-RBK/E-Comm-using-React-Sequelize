import React, { useEffect, useState } from 'react'
import NavBar from './Navbar'
import Product from './Product'
import Footer from './Footer'
import './Wishlist.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Rating from './Rating.jsx';
function Wishlist() {
  const [wishlist,setwishlist]=useState([])
  useEffect(()=>{
    axios.get('http://127.0.0.1:3000/whishlist/whishOneuser/2')
    .then((res) => {
      const dataa = res.data;
      console.log("wish",dataa)
      const newdata = dataa.map((el) => ({
        id: el.id,
        name: el.product.name,
        description: el.product.description,
        quantity: el.product.quantity,
        price: el.product.price,
        image: el.product.images[0].Url

      }

    ));
      console.log("newdata", newdata)
      setwishlist(newdata);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  return (
    <div>
        <div className='firs'>

      <h1>wishlist</h1>  <button className='Loginbut' type="submit">Move All To Bag</button>
      </div>
      <div className='allpror'>
     {
wishlist.map((e)=>{
  return (
    <div >
    <div className='pror'>
    <img src={e.image}/>
    <div >
    <FontAwesomeIcon icon={faHeart}  />
    <div className='faeye'>
    <Link to={`/oneproductdetails/${e.id}`} className="nav-link"><FontAwesomeIcon icon={faEye} /></Link>
    </div>
    </div>   
    </div>
    <h5>{e.name}</h5>
    <h6 className='prs'>{e.price}</h6>
    <Rating/>
 </div>
  )
})
     }
     </div>
      <div className='aaa'>

<button className='Loginbutton' type="submit"></button>
<h5 className='this'>just foryou</h5>

</div>
<div className='allpror'>
     {
wishlist.map((e)=>{
  return (
    <div >
    <div className='pror'>
    <img src={e.image}/>
    <div >
    <FontAwesomeIcon icon={faHeart}  />
    <div className='faeye'>
    <Link to="/signup" className="nav-link"><FontAwesomeIcon icon={faEye} /></Link>
    </div>
    </div>   
    </div>
    <h5>{e.name}</h5>
    <h6 className='prs'>{e.price}</h6>
    <Rating/>
 </div>
  )
})
     }
     </div>

      <Footer/>
    </div>
  )
}

export default Wishlist