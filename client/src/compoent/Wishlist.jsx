import React, { useEffect, useState } from 'react';
import NavBar from './Navbar.jsx';
import Product from './Product.jsx';
import Footer from './Footer';
import './Wishlist.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Template from '../components/template.jsx';

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    axios.get('http://127.0.0.1:3000/whishlist/whishOneuser/2')
      .then((res) => {
        const data = res.data;
        console.log("wish", data);
        const newdata = data.map((el) => ({
          id: el.id,
          name: el.product.name,
          description: el.product.description,
          quantity: el.product.quantity,
          price: el.product.price,
          image: el.product.images[0].Url,
        }));
        setWishlist(newdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/whishlist/delete/${id}`)
      .then(() => {
        setRefresh(!refresh);
        console.log("Product deleted from the wishlist successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const addToCart = (id) => {
    axios.post("http://localhost:3000/cart/add", {
      userId: 2,
      productId: id,
    })
    .then(() => {
      console.log("product added to cart successfully");
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return (
    <div>
      <div className='firs'>
        <h1>Wishlist</h1>
        <button className='Loginbut' type="submit" >
          Move All To Bag
        </button>
      </div>
      <div className='allpror'>
        {wishlist.map((e) => (
          <div key={e.id}>
            <Template el={e} />
            <button className='delete-btn' onClick={() => handleDelete(e.id)}>
              <FontAwesomeIcon icon={faTrash} />
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className='aaa'>
        <button className='Loginbutton' type="submit"></button>
        <h5 className='this'>Just for you</h5>
      </div>
      <div className='allpror'>
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
