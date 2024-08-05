import React from 'react';
import footerimg from './assets/footer.png';
import './Footer.css';

function Footer() {
  return (
    <div className='footes'>
      <div className='ex'>
        <h1>Exclusive</h1>
        <h3>Subscribe</h3>
        <h6>Get 10% off your first order</h6>
        <input className='searchbar' type="text" placeholder="Enter your email"></input>
      </div>
      <div>
        <h4>Support</h4>
        <h6>111 Hay El Ghazela Technopole, 7050 Ariana, Tunisia</h6>
        <h6>raedraed@gmail.com</h6>
        <h6>+21655654746</h6>
      </div>
      <div>
        <h4>Account</h4>
        <h6>My Account</h6>
        <h6>Login / Register</h6>
        <h6>Cart</h6>
        <h6>Wishlist</h6>
        <h6>Shop</h6>
      </div>
      <div>
        <h4>Quick Links</h4>
        <h6>Privacy Policy</h6>
        <h6>Terms of Use</h6>
        <h6>FAQ</h6>
        <h6>Contact</h6>
      </div>
      <div>
        <h4>Download App</h4>
        <h6>Save 3DT with App - New users only</h6>
        <img src={footerimg} className='image' alt="Download App" />
      </div>
    </div>
  );
}

export default Footer;
