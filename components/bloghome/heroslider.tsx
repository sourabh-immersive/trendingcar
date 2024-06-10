"use client";

import React, { useEffect, useState } from "react";
import { fetchPosts } from "@/services/wordpress";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import LoadingSkeleton from "../skeletons/loadingskeleton";

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

const HeroSlider: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPosts();
        setPosts(postsData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <LoadingSkeleton />;
  if (error) return <p>Error: {error}</p>;

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
            className={"heroSlider"}
          >
            {posts.map((post, index) => (
              <SwiperSlide data-index={index} key={index}>
                <Link href={`/blogs/${post.slug}`} >
                <img
                  src={
                    post.featured_image_url ||
                    "https://via.placeholder.com/600x400"
                  }
                  alt={`Slide ${index + 1}`}
                />
                <h2>{post.title.rendered}</h2>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-md-4 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
          <div className="latest-stories">
            {posts.map((post, index) => (
              <Link href={`/blogs/${post.slug}`} key={index}>
              <div
                data-index={index}
                className="d-flex align-items-center bordered px-2 py-2 mb-2"
              >
                <div className="img-holder me-1 col-auto">
                  <img
                    src={
                      post.featured_image_url ||
                      "https://via.placeholder.com/150x150"
                    }
                    alt={post.title.rendered}
                    className="img-fluid"
                  />
                </div>
                <div className="content-holder">
                  <h6 className="mb-0 fw-600 fz-14">{post.title.rendered}</h6>
                  {post.author && post.date && (
                    <span className="text-muted fz-12">
                      by {post.author} / {post.date}
                    </span>
                  )}
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
