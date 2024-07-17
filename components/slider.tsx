'use client'

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';

interface imagesData {
  url: string;
  title: string;
  alt: string;
  caption: string;
  description: string;
}

interface SliderProps {
  imgs: imagesData[];
}

const Slider: React.FC<SliderProps> = ({ imgs }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className='gallery-sliderWrap'>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img.url} alt={img.alt} img-index={`Slide ${index + 1}`} width={1200} height={800} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imgs.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img.url} alt={img.alt} img-index={`Slide ${index + 1}`} width={300} height={200} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;