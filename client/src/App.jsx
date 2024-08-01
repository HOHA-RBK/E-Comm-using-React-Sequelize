import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard.jsx';
import Productlist from './components/Productlist.jsx';
import Profilepage from './components/Profilepage.jsx';
import Addproduct from './components/Addproduct.jsx';
import "./App.css";
import Signup from "./login & signup/Signup.jsx";
import Login from "./login & signup/Login.jsx";
import Test from "./login & signup/Test.jsx";
import Admindashboard from "./components/adminDash/Admindashboard.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profilepage />} />
          <Route exact path="/products" element={<Productlist />} />
          <Route exact path="/addproduct" element={<Addproduct />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/adminDash" element={<Admindashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
