import React from 'react';
import './template.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Template({ el, setId }) {
  const navigate = useNavigate();

  const addtowishlist = (id) => {
    axios.post('http://127.0.0.1:3000/whishlist/add', {
      userId: 2,
      productId: id,
    })
    .then((res) => {
      console.log('data added');
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const navsetId = (Id) => {
    setId(Id);
    navigate("/productdetail");
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
    <div className="container">
      <div className="image-icons-container">
        <div className="image-card">
          <img src={el.image} alt={el.name} />
          <div className="addToWishList" onClick={() => { addtowishlist(el.id); }}>♡︎</div>
          <div className="all-details" onClick={() => { navsetId(el.id); }}>👁</div>
          <div className="add-to-cart" onClick={() => { addToCart(el.id); }}>🛒 Add to cart</div>
        </div>
      </div>
      <div className="info-container">
        <h5 className="name">{el.name}</h5>
        <h6 className="price">${el.price}</h6>
        <h6 className="rating">⭐⭐⭐⭐⭐({el.rating})</h6>
      </div>
    </div>
  );
}
