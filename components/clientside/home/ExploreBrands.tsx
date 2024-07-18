import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

const carBoxes = [
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

const ExploreBrands = () => {
  return (
    <div className="row">
      <div className="col-12">
        <section className="explore-brands py-50 px-0">
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
              {carBoxes.map((car, index) => (
                  <SwiperSlide key={index}>
                  <div className="car-box border p-4 text-left">
                      <div className="image-container">
                        <Image
                          src={car.image}
                          className="img-fluid"
                          alt="featured"
                          width={244} // Provide appropriate width
                          height={158} // Provide appropriate height
                        />
                      </div>
                      <div className="specifications">
                      <p>{car.name}</p>
                      <ul>
                          {car.specs.map((spec, i) => (
                          <li key={i}>{spec}</li>
                          ))}
                      </ul>
                      <span>{car.price}</span>
                      <button type="button" className="btn btn-outline-primary mt-3 w-100">Show price in my city</button>
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

export default ExploreBrands;
