import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const PhotoCarousel = ({ photos }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {photos.map((photo, index) => (
        <div key={index}>
          <img src={photo.url} alt={photo.alt} style={{ width: '100%', height: 'auto' }} />
        </div>
      ))}
    </Slider>
  );
};

export default PhotoCarousel;
//implementation method for RAED 
// import React from 'react';
// import PhotoCarousel from './PhotoCarousel';

// const photos = [
//   { url: 'https://via.placeholder.com/800x400', alt: 'Photo 1' },
//   { url: 'https://via.placeholder.com/800x400', alt: 'Photo 2' },
//   { url: 'https://via.placeholder.com/800x400', alt: 'Photo 3' },
// ];

// const App = () => {
//   return (
//     <div>
//       <h1>Photo Carousel</h1>
//       <PhotoCarousel photos={photos} />
//     </div>
//   );
// };

// export default App;
