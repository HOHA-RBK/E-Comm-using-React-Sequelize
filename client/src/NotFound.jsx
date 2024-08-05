import React from 'react';
import "./compoent/Home.css";
import Footer from "./compoent/Footer";
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found-Main">
      <div className="breadcrumb">
        <h3>Home / 404 Error</h3>
      </div>
      <div className="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <button className='p404' type="submit" onClick={()=>{navigate('/')}}>Back to Home page</button>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
