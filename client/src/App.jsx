

import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./compoent/Home.jsx"
import Navbar from "./compoent/Navbar.jsx"
import Dashboard from './components/Dashboard.jsx';
import Productlist from './components/Productlist.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Profilepage from './components/Profilepage.jsx';
import Addproduct from './components/Addproduct.jsx';
import About from "./compoent/About.jsx";
import "./App.css";
import Contact from "./compoent/Contact.jsx";
import Signup from "./compoent/Signup.jsx";
import About from "./compoent/About.jsx";
import CatProd from "./compoent/CatProd.jsx";
import Product from "./compoent/Product.jsx";
import Wishlist from "./compoent/Wishlist.jsx";
import Login from "./login & signup/Login.jsx";
import NotFound from './NotFound.jsx';
import Test from "./login & signup/Test.jsx";
import Template from './components/Template.jsx';
import Admindashboard from "./components/adminDash/Admindashboard.jsx";
import axios from 'axios';
function App() {
  // This part will be moved by Assil to the product compo
  const[product,setProduct] = useState([])
    const handleAllProducts = async ()=>{
  axios.get('http://localhost:3000/product/get')
  .then((res)=>{setProduct(res.data)})
  .catch((error)=>{console.error(error)})
    }
    useEffect(()=>{handleAllProducts()},[])
//
  return <>
  <BrowserRouter>
  <Router>
    <Navbar/>
    <Routes>
    <Route path="/" exact Component={Home} />
    <Route path="/about" exact Component={About} />
    <Route path="/contact" exact Component={Contact} />
    <Route path="/signup" exact Component={Signup} />
    <Route path="/categoryproduct" exact Component={CatProd} />
    <Route path="/login" exact Component={Login} />
    <Route path="/allproduct" exact Component={Product} />
    <Route path="/wishlist" exact Component={Wishlist} />
    <Route path="*" element={<NotFound />} />
    <Route exact path="/template" element={<Template />} />
          <Route exact path="/profile" element={<Profilepage />} />
          <Route exact path="/products" element={<Productlist product={product} />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route path='/oneproductdetails/:id' element={<ProductDetails/>} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/adminDash" element={<Admindashboard />} />
          <Route exact path="seller" element={<Dashboard />} />
    </Routes>
  </Router>
  </BrowserRouter>
  </>;
}

export default App;
