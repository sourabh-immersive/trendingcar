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
    name: 'Top SUVs in India',
    specs: ['Mahindra Scorpio N', 'Mahindra Scorpio'],
  },  
  {
    image: '/featured.png',
    name: 'Top Sedans in India',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
  },
  {
    image: '/featured.png',
    name: 'Top Hatchbacks in India',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
  },
  {
    image: '/featured.png',
    name: 'Top Compact SUV in India',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
  },  
  {
    image: '/featured.png',
    name: 'Top Sedans in India',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
  },
  {
    image: '/featured.png',
    name: 'Top Hatchbacks in India',
    specs: ['Automatic', '10.15km /1-litre', 'Hybrid'],
  }
  // Add more car boxes as needed
];

const TopCars = () => {
  return (
    <div className="row">
      <div className="col-12">
        <section className="explore-brands top-cars py-50 px-0">
          <div className="container">
            <div className="text-left">
              <h5 className="page-title text-white">Top Cars in India</h5>
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
                    <div className="car-box border bg-white p-3 text-left">
                        <div className="image-container">
                            <Image
                            src={car.image}
                            alt={car.name}
                            className="img-fluid"
                            layout="responsive"
                            width={150}
                            height={100}
                            />
                         </div>
                        <div className="specifications">
                            <h6 className="text-black"><b>{car.name}</b></h6>
                            <p className="text-muted"><small>{car.specs}</small></p>
                        </div>
                    </div>
                    </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TopCars;
