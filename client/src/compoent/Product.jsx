import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import img from './assets/img.jpg'
import axios from 'axios'
import './Product.css'
import Rating from './Rating.jsx';
function Product() {
    const [product,setproduct]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/product/get')
        .then((data)=>{
            
            setproduct(data.data)
            

        })
        .catch((err)=>{
            console.error(err)
        })
    },[])
    const data=product.slice(0,5)
    
  return (
      <div className='allpror'>
      {
       data.map((e)=>{
        return (
          <div >
             <div className='pror'>
             <img src={img}/>
             <div >
             <FontAwesomeIcon icon={faHeart} />
             <div className='faeye'>
             <FontAwesomeIcon icon={faEye} />
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
  )
}

export default Product
