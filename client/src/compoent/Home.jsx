
import Footer from './Footer.jsx'

import './Home.css'
import SideBar from './SideBar.jsx'
import { Link } from 'react-router-dom';
import jbl from './assets/jbl.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTabletAlt} from '@fortawesome/free-solid-svg-icons'
import {faComputer,faCheckSquare}from '@fortawesome/free-solid-svg-icons'
import {faClock , faTruckFast,faHeadset} from '@fortawesome/free-solid-svg-icons'
import {faCamera , faHeadphonesAlt , faGamepad} from '@fortawesome/free-solid-svg-icons'
import Image from './Image.jsx'
import Product from './Product.jsx'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  Carouset from './Carouset.jsx'
function Home() {

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
<FontAwesomeIcon icon={faComputer } className='fatel'/>
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
<h4>headphones</h4>
</div>
<div className='fateel'>
<FontAwesomeIcon icon={faGamepad} className='fatel'/>
<h4>Gaming</h4>
</div>
</div>
   {/* <img src={categ} className='categ'/> */}
   {/* <img src={sel} className='sel'/>
   <img src={all} className='all'/> */}
   <div className='aaa'>

   <button className='Loginbutton' type="submit"></button>
   <h5 className='this'>This   Month</h5>
   <button className='Loginbutto' type="submit"><Link to='/allproduct'> View All</Link></button>
   </div>
   <h1 className='h11'>Best Selling Product</h1>
   
   <Product/>
   <img src={jbl} className='jbl'/>
   <div className='aaa'>

<button className='Loginbutton' type="submit"></button>
<h5 className='this'>Our Product</h5>

</div>
<h1 className='h11'>Explor Your Product's</h1>
<Product/>
<Product/>
<button className='Loginbutt' type="submit"><Link to='/allproduct'>  View All Product</Link></button>
<div className='aaa'>

<button className='Loginbutton' type="submit"></button>
<h5 className='this'>Featured</h5>

</div>
<h1 className='h11'>New Arrival</h1>
{/* <img src={arival} className='arival'/> */}
<Image/>
<div className='sous'>
<div className='fateel'>
<FontAwesomeIcon icon={faTruckFast} className='fatel'/>
<h3 className='h33'>Free and fast delevery</h3 >
<h6>free delevery for all orders over $140</h6>
</div>
<div className='fateel'>
<FontAwesomeIcon icon={faHeadset} className='fatel'/>
<h3 className='h33'>24/7 Costumer Service</h3>
<h6>Friendly 24/7 customer support</h6>
</div>
<div className='fateel'>
<FontAwesomeIcon icon={faCheckSquare} className='fatel'/>
<h3 className='h33'>Money back Garantee</h3 >
<h6>We reurn money within 30 days</h6>
</div>
</div>
      <Footer/>
    </div>
  )
}

export default Home
