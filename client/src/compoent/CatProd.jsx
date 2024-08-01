
import React, { useEffect, useState } from 'react'
import axios from 'axios'
function CatProd() {
    const[prod,setprod]=useState([])
    const id=localStorage.getItem('id')
    
     console.log(id)
   useEffect(()=>{
    axios.get(`http://localhost:3000/product/getbycategory/${id}`)
    .then((result)=>{
        setprod(result.data)
        console.log(result.data)
    })
    .catch((err)=>{
        console.error(err)
    })
   },[])
  return (
    <div>
     {prod.map((e)=>{

     })}
    </div>
  )
}

export default CatProd
