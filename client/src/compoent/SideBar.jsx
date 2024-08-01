import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import{ useEffect, useState } from 'react'
import './SidBar.css'
function SideBar() {
    const [category,setcategory]=useState([])
     const [proddd,setproddd]=useState([])
useEffect(()=>{
    axios.get('http://localhost:3000/category/get')
    .then(
        (data)=>{
            console.log(data.data)
            setcategory(data.data)
        }
    )
    .catch((err)=>{
        console.error(err)
    })
},[])

  return (
    <div>
            <div >
            {category.map((e)=>{
                return(
        <div className='ull'>          

    <Link to="/categoryproduct"  className="nav-link"><h5 className='catg' onClick={()=>{localStorage.setItem('id',e.id)}}>{e.name}</h5></Link>
 
     </div>              
                )
            })}
        
            </div>

        
    </div>
  )
}

export default SideBar
