Template.jsx


import React from 'react'
import './template.css'
export default function Template() {
  return (
    <div className='container'>
      <div className='promotion' >-35%</div>
      <div className='all-details'>👁</div>
      <div className='image-container'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsvDd-BWw08FdNDWctxVXz7FuMdNiZA-wuGA&s" alt="laptop" />
      </div>
      <div className='add-to-cart'>🛒 Add to cart</div>
      <h5 className='name'>Laptop DELL</h5>
      <h6 className='price'>960$</h6>
      <h6 className='rating'>⭐⭐⭐⭐⭐(65)</h6>
    </div>
  )
}
