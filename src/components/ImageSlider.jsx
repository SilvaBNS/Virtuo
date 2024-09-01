import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material'; // Use appropriate library if needed
// Slick settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const sliderData = [
  {
    image: '../assets/image1.png',
    text: 'Image 1 Description',
  },
  {
    image: 'path/to/image2.jpg',
    text: 'Image 2 Description',
  },
  {
    image: 'path/to/image3.jpg',
    text: 'Image 3 Description',
  },
  // Add more images as needed
];

const ImageSlider = () => {
  return (
    <div className="relative mt-10">
      <Slider {...settings}>
        {sliderData.map((item, index) => (
          <div key={index} className="relative">
            <img src={item.image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black text-white p-4 rounded-md">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
