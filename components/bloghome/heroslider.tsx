"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function () {
  const latestPosts = [
    {
      title: "New Porsche Taycan Cross Turismo Prototype R",
      author: "Matt Posske",
      date: "14 May 20214",
      image: "https://via.placeholder.com/600x400",
      alt: "Auto",
    },
    {
      title: "New Porsche Taycan Cross Turismo Prototype R",
      author: "Matt Posske",
      date: "14 May 20214",
      image: "https://via.placeholder.com/600x400",
      alt: "Auto",
    },
    {
      title: "New Porsche Taycan Cross Turismo Prototype R",
      author: "Matt Posske",
      date: "14 May 20214",
      image: "https://via.placeholder.com/600x400",
      alt: "Auto",
    },
    {
      title: "New Porsche Taycan Cross Turismo Prototype R",
      author: "Matt Posske",
      date: "14 May 20214",
      image: "https://via.placeholder.com/600x400",
      alt: "Auto",
    },
  ];

  return (
    <div className="heroAreaMain">
      <div className="row">
        <div className="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
            className={"heroSlider"}
          >
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x400" alt="Slide 1" />
              <h2>The 2024 Subaru WRX Is Now $2,230 More Expensive</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x400" alt="Slide 2" />
              <h2>The 2024 Subaru WRX Is Now $2,230 More Expensive</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x400" alt="Slide 3" />
              <h2>The 2024 Subaru WRX Is Now $2,230 More Expensive</h2>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://via.placeholder.com/600x400" alt="Slide 4" />
              <h2>The 2024 Subaru WRX Is Now $2,230 More Expensive</h2>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
          <div className="latest-stories">
            {latestPosts.map((post) => (
              <div className="d-flex align-items-center bordered px-2 py-2 mb-2">
                <div className="img-holder me-1">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="img-fluid"
                  />
                </div>
                <div className="content-holder">
                  <h6 className="mb-0 fw-600 fz-14">{post.title}</h6>
                  <span className="text-muted fz-12">
                    by {post.author} / {post.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
