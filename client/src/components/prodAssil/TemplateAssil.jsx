import React from 'react';
import './templateAssill.css';
import axios from 'axios';

const addtowishlist = (id) => {
  axios.post('http://127.0.0.1:3000/whishlist/add', {
    userId: 2,
    productId: id
  })
  .then((res) => {
    console.log('data added');
  })
  .catch((err) => {
    console.error(err);
  });
}

export default function Template({ el }) {
  return (
    <div className='container'>
      <div className='image-icons-container'>
        <div className='image-card'>
          <img src={el.image} alt={el.name} />
          <div className='addToWishList' onClick={() => addtowishlist(el.id)}>♡︎</div>
          <div className='all-details'>👁</div>
          <div className='add-to-cart'>🛒 Add to cart</div>
        </div>
      </div>
      <div className='info-container'>
        <h5 className='name'>{el.name}</h5>
        <h6 className='price'>${el.price}</h6>
        <h6 className='rating'>⭐⭐⭐⭐⭐({el.rating})</h6>
      </div>
    </div>
  );
}
