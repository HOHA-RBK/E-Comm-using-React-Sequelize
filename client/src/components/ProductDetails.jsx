import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './productDetails.css'

export default function ProductDetails() {
    const [oneProduct,setOneProduct] = useState({})
    const {id} = useParams()
    
useEffect(()=>{
    axios.get(`http://127.0.0.1:3000/product/get/${id}`)
    .then((res)=>{setOneProduct(res.data)
    })
    .catch((error)=>{console.error(error)})
},[id])

    if (!oneProduct) {
        return <div>Product Not Found</div>
    }

  return (
   <div className='parent-container'>
     <div className='right-container'>
        <div className='name-div'> {oneProduct.name}</div>
        <div className='price-div'> {oneProduct.price} $</div>
        <div className='description-div'> {oneProduct.description}</div>
        <div className='quantity-div'> {oneProduct.quantity}</div>
        <div className='rating-div'> {oneProduct.rating}</div>
    </div>
   </div>
  )
}
