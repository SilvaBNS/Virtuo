import React from 'react';
import Slider from 'react-slick';
import { sliderData } from "../constants"
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


// Optional: If you're using Tailwind CSS or other styling, ensure it's properly configured.

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ImageSlider = () => {
  return (
    <div className="relative mt-10">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className="relative">
            <img 
              src={item.image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-auto" 
            />
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-md">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
