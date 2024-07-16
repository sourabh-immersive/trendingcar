import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image'

const comparisonsWrapper = [
  {
    image: '/featured.png',
    name: 'Mercedes Benz Car',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
    price: '₹15.49 - 25.49 Lakh*'
  },
  {
    image: '/featured.png',
    name: 'Mercedes Benz Car',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
    price: '₹15.49 - 25.49 Lakh*'
  },
  {
    image: '/featured.png',
    name: 'Mercedes Benz Car',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
    price: '₹15.49 - 25.49 Lakh*'
  },
  {
    image: '/featured.png',
    name: 'Mercedes Benz Car',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
    price: '₹15.49 - 25.49 Lakh*'
  },
  {
    image: '/featured.png',
    name: 'Mercedes Benz Car',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
    price: '₹15.49 - 25.49 Lakh*'
  }
  // Add more car boxes as needed
];

const CompareCars = () => {
  return (
    <div className="row">
      <div className="col-12">
        <section className="compare-cars py-50 px-0">
          <div className="container">
            <div className="text-left">
              <h6 className="primary-text-dotted">RECENT LAUNCHED CAR</h6>
              <h5 className="page-title">Explore All vechicles</h5>
            </div>
            <div className="slider">
                <Swiper
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                slidesPerView={4}
                spaceBetween={0}
                >
                {comparisonsWrapper.map((car, index) => (
                    <SwiperSlide key={index}>
                        <div className="comparison-wrapper">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-wrapper">
                                        <Image
                                        src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1697697928533/front-left-side-47.jpg"
                                        width={500}
                                        height={500}
                                        alt="Picture of the author"
                                        />
                                    </div>
                                    <div className="content-wrapper">
                                        <span className="brandTitle truncate">Maruti</span>
                                        <span className="modelTitle truncate">FRONX</span>
                                        <div className="price">
                                            <span className="icon-cd_R">Rs.</span>7.51 - 13.04 Lakh<sup> *</sup>
                                        </div>
                                    </div>
                                    <div className="vsTag">VS</div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-wrapper">
                                        <img className="hover imageTransition active" data-autofit="true" decoding="async" title="FRONX vs Taisor" alt="FRONX vs Taisor" src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Urban-Cruiser-Taisor/11639/1712131241368/front-left-side-47.jpg" loading="eager" data-lazy="true" />
                                    </div>
                                    <div className="content-wrapper">
                                        <span className="brandTitle truncate">Maruti</span>
                                        <span className="modelTitle truncate">FRONX</span>
                                        <div className="price">
                                            <span className="icon-cd_R">Rs.</span>7.51 - 13.04 Lakh<sup> *</sup>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <a href="#" className=" primaryButton" title="FRONX vs Taisor" data-lt="/compare/maruti-fronx-and-toyota-taisor.htm">
                                        Maruti FRONX vs Toyota Taisor
                                    </a>
                                </div>
                            </div>
                        </div>
                   </SwiperSlide>
              ))}
              </Swiper>
            </div>
            <a href="javascript:void(0);" className="text-center text-decoration-none mt-4 d-block text-black">View All Vehicle <i className="fas fa-long-arrow-right"></i></a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CompareCars;