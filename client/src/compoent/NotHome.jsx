import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer.jsx';
import SideBar from './SideBar.jsx';
import Carouset from './Carouset.jsx';
import Template from '../components/prodAssil/TemplateAssil.jsx';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTabletAlt, faComputer, faCheckSquare, faClock, faTruckFast, faHeadset, faCamera, faHeadphonesAlt, faGamepad } from '@fortawesome/free-solid-svg-icons';
import jbl from './assets/jbl.png';
import Image from './Image.jsx';
import Product from './Product.jsx';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Home() {
  const [refresh, setRefresh] = useState(false);
  const [newrefresh, setNewrefresh] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/product/prodimage/1").then((res) => {
      const dataa = res.data;
      const newdata = dataa.map((el) => ({
        id: el.id,
        name: el.name,
        description: el.description,
        quantity: el.quantity,
        price: el.price,
        images: el.images.map(img => img.Url)
      }));
      setProducts(newdata);
    });
  }, [refresh, newrefresh]);
  console.log(products,"products")

  return (
    <div>
      <div className='sid'>
        <SideBar className='cos'/>
        <Carouset/>
      </div>
      <div className='aaa'>
        <button className='Loginbutton' type="submit"></button>
        <h5 className='this'>Categories</h5>
      </div>
      <h1 className='h11'>Browse By Category</h1>
      <div className='brow'>
        <div className='fateel'>
          <FontAwesomeIcon icon={faTabletAlt} className='fatel'/>
          <h4>Phones</h4>
        </div>
        <div className='fateel'>
          <FontAwesomeIcon icon={faComputer} className='fatel'/>
          <h4>Computers</h4>
        </div>
        <div className='fateel'>
          <FontAwesomeIcon icon={faClock} className='fatel'/>
          <h4>Smartwatch</h4>
        </div>
        <div className='fateel'>
          <FontAwesomeIcon icon={faCamera} className='fatel'/>
          <h4>Camera</h4>
        </div>
        <div className='fateel'>
          <FontAwesomeIcon icon={faHeadphonesAlt} className='fatel'/>
          <h4>Headphones</h4>
        </div>
        <div className='fateel'>
          <FontAwesomeIcon icon={faGamepad} className='fatel'/>
          <h4>Gaming</h4>
        </div>
      </div>
      <div className='aaa'>
        <button className='Loginbutton' type="submit"></button>
        <h5 className='this'>This Month</h5>
        <button className='Loginbutto' type="submit"> View All</button>
      </div>
      <h1 className='h11'>Best Selling Product</h1>
      <div className='product-list'>
        {products.map(product => (
          <Template
            key={product.id}
            name={product.name}
            price={product.price}
            rating={product.rating}
            imageUrls={product.images}
          />
        ))}
      </div>
      <img src={jbl} className='jbl'/>
      <div className='aaa'>
        <button className='Loginbutton' type="submit"></button>
        <h5 className='this'>Our Product</h5>
      </div>
      <h1 className='h11'>Explore Your Products</h1>
      <Product/>
      <Product/>
      <button className='Loginbutt' type="submit"> View All Products</button>
      <div className='aaa'>
        <button className='Loginbutton' type="submit"></button>
        <h5 className='this'>Featured</h5>
      </div>
      <h1 className='h11'>New Arrival</h1>
      <Image/>
      <div className='sous'>
        <div className='fateel'>
          <FontAwesomeIcon icon={faTruckFast} className='fatel'/>
          <h3 className='h33'>Free and fast delivery</h3>
          <h6>Free delivery for all orders over $140</h6>
        </div>
        <div className='fateel'>
          <FontAwesomeIcon icon={faHeadset} className='fatel'/>
          <h3 className='h33'>24/7 Customer Service</h3>
          <h6>Friendly 24/7 customer support</h6>
        </div>
        <div className='fateel'>
          <FontAwesomeIcon icon={faCheckSquare} className='fatel'/>
          <h3 className='h33'>Money Back Guarantee</h3>
          <h6>We return money within 30 days</h6>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
