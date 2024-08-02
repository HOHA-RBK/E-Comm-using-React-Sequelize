import React from 'react'
import NavBar from './Navbar'
import Product from './Product'
import Footer from './Footer'
import './Wishlist.css'
function Wishlist() {
  return (
    <div>
        <div className='firs'>

      <h1>wishlist</h1>  <button className='Loginbut' type="submit">Move All To Bag</button>
        </div>

      <Product/>
      <div className='aaa'>

<button className='Loginbutton' type="submit"></button>
<h5 className='this'>just foryou</h5>

</div>

<Product/>

      <Footer/>
    </div>
  )
}

export default Wishlist
