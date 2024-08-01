
import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from './components/Dashboard.jsx'
import Productlist from './components/Productlist.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Profilepage from './components/Profilepage.jsx';
import Addproduct from './components/Addproduct.jsx';
import "./App.css";
import Signup from "./login & signup/Signup.jsx";
import Login from "./login & signup/Login.jsx";
import Test from "./login & signup/Test.jsx";
import Template from './components/Template.jsx';

const App=() =>{ 
  const[product,setProduct] = useState([])
    const handleAllProducts = async ()=>{
  axios.get('http://localhost:3000/product/get')
  .then((res)=>{setProduct(res.data)})
  .catch((error)=>{console.error(error)})
    }
    useEffect(()=>{handleAllProducts()},[])

  return (
    <div>
      <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="*"
                        element={<Dashboard />}
                    />
                    <Route
                        exact
                        path="/template"
                        element={<Template />}
                    />
                    <Route
                        exact
                        path="/"
                        element={<Productlist product={product} />}
                    />
                    <Route path='/oneproductdetails/:id' element={<ProductDetails/>} />
<Route
                        exact
                        path="*"
                        element={<Login/>}
                    />
                          
                </Routes>
            </BrowserRouter>
    </div>
  );}
export default App;

  
  


