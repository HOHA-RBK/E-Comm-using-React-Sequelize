import React from 'react'
import footerimg from './assets/footer.png'
import './Footer.css'
function Footer() {
  return (
    <div  className='footes'>
    <div className='ex'>
    <h1>Exclusive</h1>
        <h3>Subscribe</h3>
        <h6>Get 10 % off your first order</h6>
        <input className='searchbar' type="text" placeholder="enter your email ?"></input>
    </div>
    <div>
        <h4>Support</h4>
        <h6>111 hay elghazela technopole 7050 ariana tunisie</h6>
        <h6>raedraed@gmail.com</h6>
        <h6>+21655654746</h6>
    </div>
    <div>
        <h4>Account </h4>
        <h6>My Account </h6>
        <h6>Login / Register</h6>
        <h6>Cart</h6>
        <h6>WishList</h6>
        <h6>shop</h6>
    </div>
    <div>
        <h4>Quick Link</h4>
        <h6>Privacy Policy</h6>
        <h6>Terms of Use</h6>
        <h6>FAQ</h6>
        <h6>Cantact</h6>
    </div>
    <div>
        <h4>Download App</h4>
        <h6>Save 3$ with App New user Only </h6>
        <img src={footerimg} className='image'/>
    </div>
    </div>
  )
}

export default Footer
