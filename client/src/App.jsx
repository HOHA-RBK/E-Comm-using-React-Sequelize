import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './compoent/Home.jsx';
import Navbar from './compoent/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import Productlist from './components/Productlist.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Profilepage from './components/Profilepage.jsx';
import Admindashboard from './components/adminDash/Admindashboard.jsx';
import Addproduct from './components/Addproduct.jsx';
import About from './compoent/About.jsx';
import './App.css';
import Contact from './compoent/Contact.jsx';
import Signup from './login & signup/Signup.jsx';
import CatProd from './compoent/CatProd.jsx';
import Product from './compoent/Product.jsx';
import Wishlist from './compoent/Wishlist.jsx';
import Login from './login & signup/Login.jsx';
import NotFound from './NotFound.jsx';
import Test from './login & signup/Test.jsx';
import Template from './components/Template.jsx';
import axios from 'axios';

function App() {
  const [product, setProduct] = useState([]);

  const handleAllProducts = async () => {
    axios.get('http://localhost:3000/product/get')
      .then((res) => { setProduct(res.data) })
      .catch((error) => { console.error(error) });
  }

  useEffect(() => { handleAllProducts(); }, []);

  return (
    <BrowserRouter>
      <AppContent product={product} />
    </BrowserRouter>
  );
}

function AppContent({ product }) {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/seller') || location.pathname === '/adminDash';

  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='' */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/categoryproduct/:id" element={<CatProd />} />
        <Route path="/login" element={<Login />} />
        <Route path="/allproduct" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/template" element={<Template />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/products" element={<Productlist product={product} />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/oneproductdetails" element={<ProductDetails />} />
        <Route path="/test" element={<Test />} />
        <Route path="/adminDash" element={<Admindashboard />} />
        <Route path="/seller/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
