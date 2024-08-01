
import Footer from './Footer.jsx'
import home from './assets/home.png'
import './Home.css'
import SideBar from './SideBar.jsx'
import categ from './assets/categ.png'
import jbl from './assets/jbl.png'
import arival from './assets/arival.png'
import sous from './assets/sous.png'
import Product from './Product.jsx'
function Home() {

  return (
    <div>
        <div className='sid'>
            <SideBar/>
  <img src={home} className='imgh'/>
        </div>
   <img src={categ} className='categ'/>
   {/* <img src={sel} className='sel'/>
   <img src={all} className='all'/> */}
   <div className='aaa'>

   <button className='Loginbutton' type="submit"></button>
   <h5 className='this'>This   Month</h5>
   <button className='Loginbutto' type="submit"> View All</button>
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
<button className='Loginbutt' type="submit"> View All Product</button>
<div className='aaa'>

<button className='Loginbutton' type="submit"></button>
<h5 className='this'>Featured</h5>

</div>
<h1 className='h11'>New Arrival</h1>
<img src={arival} className='arival'/>
<img src={sous} className='sous'/>
      <Footer/>
    </div>
  )
}

export default Home
