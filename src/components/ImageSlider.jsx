import React from 'react';
import Slider from 'react-slick';
import { sliderData } from "../constants"
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,          // Enables autoplay
  autoplaySpeed: 3000,     // Sets the speed of autoplay (in milliseconds)
  cssEase: 'ease-in-out',  // Adds a smooth transition effect
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
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black bg-opacity-10 lg:text-3xl text-white p-4 rounded-md">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
