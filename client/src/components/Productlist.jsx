import React, { useState,useEffect } from 'react'
import { Link } from "react-router-dom";


const Productlist =({product})=>{
    return <div className='container'>
        {product.map((p)=>(
            <div key={p.id} >
                <h2>{p.name}</h2>
                <img src={p.image} alt={p.name} />
                <Link to={`/oneproductdetails/${p.id}`} state={{p}} >show details</Link>
            </div>
        ))}
    </div>
}

export default Productlist