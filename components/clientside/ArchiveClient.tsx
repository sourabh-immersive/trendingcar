"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchPostsByCategory } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import Link from "next/link";

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/wp/v2";

interface Post {
  id: number;
  slug: string;
  name: string;
  featured_img: string;
  author?: string;
  date?: string;
}

interface AllCategoryProps {
  initialPosts: Post[];
  numberOfPosts: number;
}

const ArchiveClient: React.FC<AllCategoryProps> = ({
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

  const getListCategories = async (
    numberOfPosts: number,
    page: number
  ): Promise<Post[]> => {
    const response = await fetch(
      `${API_BASE_URL}/categories?page=${page}&per_page=${numberOfPosts}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
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

  return (
    <div className="PostbyCategory-section">
      <div className="row"></div>
      <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-4" data-index={index} key={post.id}>
            <div className="card mb-4 box-shadow">
              <Link href={`/blogs/categories/${post.slug}`}>
                <Image
                  className="card-img-top"
                  src={
                    post.featured_img || "https://via.placeholder.com/600x400"
                  }
                  alt="Card image cap"
                  width="600"
                  height="400"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    dangerouslySetInnerHTML={{ __html: post.name }}
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {loading && <p className="loadingText">Loading...</p>}
      {!loading && (
        <div className="row" style={{ display: "block" }}>
          <button onClick={loadMore} className="btn btn-primary load_more_btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ArchiveClient;
