

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Productlist from './components/Productlist.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import Profilepage from './components/Profilepage.jsx';
import Addproduct from './components/Addproduct.jsx';
import About from "./compoent/About.jsx";
import "./App.css";
import Contact from "./compoent/Contact.jsx";
import Signup from "./login & signup/Signup.jsx";
import Login from "./login & signup/Login.jsx";
import Test from "./login & signup/Test.jsx";
import Template from './components/Template.jsx';
import Admindashboard from "./components/adminDash/Admindashboard.jsx";



const App = () => {
// This part will be moved by Assil to the product compo
  const[product,setProduct] = useState([])
    const handleAllProducts = async ()=>{
  axios.get('http://localhost:3000/product/get')
  .then((res)=>{setProduct(res.data)})
  .catch((error)=>{console.error(error)})
    }
    useEffect(()=>{handleAllProducts()},[])
//

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/template" element={<Template />} />
          <Route exact path="/profile" element={<Profilepage />} />
          <Route exact path="/products" element={<Productlist product={product} />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route path='/oneproductdetails/:id' element={<ProductDetails/>} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/adminDash" element={<Admindashboard />} />
          <Route exact path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;
