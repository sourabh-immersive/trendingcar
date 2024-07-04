"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchPostsByCategory } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';
import "swiper/scss/navigation";
import "swiper/scss/pagination";

interface Post {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;
  content: string;
  date?: string;
}

interface AllWebstoriesProps {
  initialPosts: Post[];
  numberOfPosts: number;
}

const AllWebstoriesClient: React.FC<AllWebstoriesProps> = ({
  initialPosts,
  numberOfPosts,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const initialRender = useRef(true);

  const [activeSlide, setActiveSlide] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const openPopup = (link: string, key: number) => {
    setCurrentLink(link);
    setActiveSlide(key);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  const getListCategories = async (
    numberOfPosts: number,
    page: number
  ): Promise<Post[]> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_CUSTOM_URL}/webstories/?per_page=12`, { next: { revalidate: 3600 } });
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  const updatePosts = async (page: number) => {
    setLoading(true);
    try {
      const postsData = await getListCategories(numberOfPosts, page);
      if (postsData.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...postsData]);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
      setInitialLoad(false);
    }
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    updatePosts(page);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="section">
      <div className="webstories-section container">
        <div className="row">
          {posts.map((post, key) => (
            <div className="col-md-3" key={key}>
              <div
                onClick={() => openPopup(post.content, key)}
                className="card mb-4 box-shadow"
                data-index={key}
              >
                <Image
                  className="card-img-top"
                  src={post.featuredImage || "ff"}
                  alt={post.title}
                  width={225}
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">
                    <Image
                      src="/icons/clock-icon.png"
                      alt="web stories"
                      width="18"
                      height="18"
                    />{" "}
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="webstory-popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button className="webstory-popupClose" onClick={closePopup}>
                ⛌
              </button>
              <Swiper
                initialSlide={activeSlide}
                pagination={{
                  type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 1,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 1,
                  },
                }}
              >
                {posts.map((spost, index) => (
                  <SwiperSlide key={index} className="swiper-slide-active11">
                    <iframe
                      src={spost.content}
                      style={{ height: "100vh", width: "100%" }}
                      title="Webstory - Trending Car"
                    ></iframe>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {loading && <p className="loadingText">Loading...</p>}
      {!loading && hasMore && (
        <div className="row" style={{ display: "none" }}>
          <button onClick={loadMore} className="btn btn-primary load_more_btn">
            Load More
          </button>
        </div>
      )}
      {!hasMore && <p>No more posts!</p>}
    </div>
  );
};

export default AllWebstoriesClient;