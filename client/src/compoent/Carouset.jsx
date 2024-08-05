import React from "react";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';

const ProductCarousel = () => {
  const productImages = [
    {
      src: "https://c4.wallpaperflare.com/wallpaper/736/246/549/asus-logo-simple-wallpaper-preview.jpg",
      alt: "Product 1",
    },
    {
      src: "https://restore.bg/modules/ph_simpleblog/featured/77.jpg",
      alt: "Product 2",
    },
    {
      src: "https://www.ndellc.net/images/background/aboutbanner2.jpg",
      alt: "Product 3",
    },
    {
      src: "https://images.samsung.com/is/image/samsung/assets/sg/support/mobile-devices/what-are-the-new-design-features-on-samsung-galaxy-s10-series/new-design-features-banner1.jpg?$ORIGIN_JPG$",
      alt: "Product 4",
    },
    {
      src: "https://dlcdnrog.asus.com/rog/media/1514539703173.webp",
      alt: "Product 5",
    },
  ];

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} className="car">
      {productImages.map((image, index) => (
        <div key={index} className="carousel-image">
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
