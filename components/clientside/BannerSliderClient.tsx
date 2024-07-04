"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";


// Define the shape of the data you expect to receive from the API
interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  featured_image_url?: string;
  author?: string; 
  date?: string; 
}



const BannerSliderClient: React.FC<ClientComponentProps> = () => {
  

//   useEffect(() => {
//     const getPosts = async () => {
//       try {
//         const postsData = await fetchPosts();
//         setPosts(postsData);
//       } catch (err: unknown) {
//         if (err instanceof Error) {
//           setError(err.message);
//         } else {
//           setError(String(err));
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     getPosts();
//   }, []);

//   if (loading) return <LoadingSkeleton />;
//   if (error) return <p>Error: {error}</p>;

return (
    <div className="heroAreaMain">
        <div className="row">
            <div className="col-md-8 col-sm-12 col-lg-8 col-xl-8 col-xxl-8">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={true}
                    // pagination={{ clickable: false }}
                    scrollbar={{ draggable: true }}
                    modules={[Autoplay, Navigation]}
                    // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className={"BannerSliderClient"}
                >
                    {posts.map((post, index) => (
                    <SwiperSlide data-index={index} key={index}>
                        <Link href={`/blogs/${post.slug}`} >
                            <Image
                            src={
                                post.featured_image_url ||
                                "https://via.placeholder.com/600x400"
                            }
                            alt={`Slide ${index + 1}`}
                            width="600"
                            height="400"
                            />
                            <h2>{post.title.rendered}</h2>
                        </Link>
                    </SwiperSlide>
                ))}
                </Swiper>
            </div>
        </div>
    </div>
  );
};

export default BannerSliderClient;