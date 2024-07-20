// components/BannerSlider.js

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const slides = [
  { image: '/banner-home.png', text: 'TRUSTED CAR DEALER SERVICES', subtext: 'FIND THE RIGHT CAR' },
  { image: '/blog1.png', text: 'TRUSTED CAR DEALER SERVICES', subtext: 'FIND THE RIGHT CAR' },
  { image: '/blog2.png', text: 'TRUSTED CAR DEALER SERVICES', subtext: 'FIND THE RIGHT CAR' }
];

const BannerSlider = () => {
  return (
    <div className="row mt-4">
      <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
        <section className="banner-section">
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
                    <div className="overlay"></div>
                    <div className="container">
                      <div className="d-flex align-items-center justify-content-center h-100 text-center">
                        <div className="banner-content">
                          <h6 className="text-white">{slide.text}</h6>
                          <h1 className="text-white">{slide.subtext}</h1>
                          <div className="form-group pos-rel">
                              <input type="text" className="form-control home-search-input mb-3" id="search" placeholder="Type to select car name" />
                              <button type="button" className="btn btn-primary pos-abs home-search-btn">Search Car</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BannerSlider;
