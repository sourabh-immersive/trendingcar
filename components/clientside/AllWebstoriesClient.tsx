"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchPostsByCategory } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/custom/v2";

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
  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  const getListCategories = async (
    numberOfPosts: number,
    page: number
  ): Promise<Post[]> => {
    const response = await fetch(`${API_BASE_URL}/webstories`, {
      method: "GET",
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  const updatePosts = async (page: number) => {
    setLoading(true);
    // console.log("insideupdate", page);
    try {
      const postsData = await getListCategories(numberOfPosts, page);
    //   console.log("prev posts", posts);
    //   console.log(postsData);
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
    console.log("effect called");
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
    // console.log('loadmore', page);
  };

  //   console.log('initial page', page);
  // if (loading && initialLoad) return <LoadingSkeleton />;
  if (error) return <p>Error: {error}</p>;

  

  const openPopup = (link: string) => {
    setCurrentLink(link);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <div className="section">
      <div className="webstories-section container">
        <div className="row">
          {posts.map((post, key) => (
            <div className="col-md-3" key={key}>
              <div
                onClick={() => openPopup(post.content)}
                className="card mb-4 box-shadow"
                data-index={key}
              >
                {/* <Link href={`/web-stories/${post.slug}`} target="_blank"> */}
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
                {/* </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
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
                <iframe
                  src={currentLink}
                  style={{ height: "100vh", width: "100%" }}
                  title="Webstory - Trending Car"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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