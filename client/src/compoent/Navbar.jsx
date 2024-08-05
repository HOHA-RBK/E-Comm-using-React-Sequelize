import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const NavBar = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all products once when the component mounts
    axios.get('http://localhost:3000/product/get')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleSearch = () => {
    const product = products.find((prod) => prod.name.toLowerCase() === name.toLowerCase());
    if (product) {
      navigate(`/product/${product.id}`);
    } else {
      console.log('Product not found');
    }
  };

  return (
    <>
      <div className='black'>
        <h6 className='textBlack'>
          Summer Sale For All Suits And Free Express Delivery - OFF 50%! 
          <p className='mot'>Shop Now</p>
        </h6>
      </div>
      <nav className="navbar">
        <h1 className='name' style={{ cursor: "pointer" }} onClick={() => navigate('/')}>Exclusive</h1>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
          <li className="nav-item"><Link to="/signup" className="nav-link">SignUp</Link></li>
        </ul>
        <div className='search'>
          <input 
            className='searchbar' 
            type="text" 
            placeholder="What Are You Looking For?" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          <FontAwesomeIcon icon={faSearch} className='fasearch' onClick={handleSearch} />
          <Link to="/wishlist"><FontAwesomeIcon icon={faHeart} className='faheart' /></Link>
          <FontAwesomeIcon icon={faShoppingCart} className='fashop' />
          <Link to='/login'><FontAwesomeIcon icon={faUserCircle} className='faper' /></Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
