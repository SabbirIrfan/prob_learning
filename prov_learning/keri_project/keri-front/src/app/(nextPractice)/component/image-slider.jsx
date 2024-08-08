"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/id/1/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/id/2/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/id/3/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/id/4/400/200" />
        </div>
      </Slider>
    </div>
  );
}