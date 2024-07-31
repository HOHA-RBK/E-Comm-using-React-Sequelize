
import React from 'react';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Dashboard from './components/Dashboard.jsx'
import Productlist from './components/Productlist.jsx';
import Profilepage from './components/Profilepage.jsx';
import Addproduct from './components/Addproduct.jsx';
import "./App.css";
import Signup from "./login & signup/Signup.jsx";
import Login from "./login & signup/Login.jsx";
import Test from "./login & signup/Test.jsx";

const App=() =>{
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
                        path="*"
                        element={<Login/>}
                    />
                          
                </Routes>
            </BrowserRouter>
    </div>
  );
export default App;

  
  


