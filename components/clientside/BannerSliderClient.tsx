// components/BannerSlider.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const slides = [
  { image: '/blog1.png', text: 'Slide 1' },
  { image: '/blog2.png', text: 'Slide 2' },
  { image: '/blog3.png', text: 'Slide 3' }
];

const BannerSlider = () => {
  return (
    <div className="slider">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="image" style={{ backgroundImage: `url(${slide.image})`, height: '600px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="text">{slide.text}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
