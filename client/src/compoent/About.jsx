import React from 'react';
import "../compoent/about/about.css"
import stats from "../assets/stats about.png"

function About() {
  return (
    
    <div className='about-container'>
      <p> Home/ <strong>About</strong></p>
      <div className='about-content'>
        <p>
          Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          <br />
          Exclusive has more than 1 million products to offer, growing very fast. Exclusive offers a diverse assortment in categories ranging from consumer.
        </p>
        <img
          className='about-image'
          src="https://s3-alpha-sig.figma.com/img/fcc8/9aaa/7b85f8c1dcce81e71e2eb178be13bd4d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cz289uor3qUi4aXsKVKZc6vViywoupyFOeRFnkhTZJzN6VCjAvG~MPCYkm-KdpEa9y9q04~oglDuUi8wOr5K0TS5MIiJdB~I5Kovb9b2RrdGunWAALIHlrHue2lnbspw5Ck2rMWYsU-GDtBa0C4WDvD2fQApUyKtU9~PzzKDf1mXniv0w0s3akSKD40a8ZS7VGgm5tdsRe5Yh~nIWNLGd9Hxkbi7~rWroy~7TkPVY-17PrBUTauGYvY2Bx5WH5Oz9bLrQOTP5AakZaXUna0PYhNEmvnA4f-Rn0bxvic2IDFY0e5X5mXrKcneK7WGxZgHjMIlglHOATnThN18rgr16w__" 
          alt="Exclusive" 
        />
      </div>
      <div>
        <img style={{width:"1030px",marginLeft:"65px"}} src={stats} alt="" />
      </div>
    </div>
  );
}


export default About;