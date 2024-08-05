import React, { useEffect, useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Template from '../components/prodAssil/TemplateAssil.jsx';
import axios from 'axios'
import './Product.css'
import Rating from './Rating.jsx';
import { PostAdd } from '@mui/icons-material';

function Product() {
    const [product,setproduct]=useState([])
    useEffect(() => {
      axios.get("http://localhost:3000/product/getprodpic").then((res) => {
        const dataa = res.data;
        console.log(dataa)
        const newdata = dataa.map((el) => ({
          id: el.id,
          name: el.name,
          description: el.description,
          quantity: el.quantity,
          price: el.price,
          image: el.images[0].Url

        }

      ));
        console.log("newdata", newdata)
        setproduct(newdata);
      });
    },[]);
    
    const data=product.slice(0,5)

  return (
      <div className='allpror'>

      {data.map((el)=>{
        return <Template el={el}/>
      })}
    </div>
  )
}

export default Product