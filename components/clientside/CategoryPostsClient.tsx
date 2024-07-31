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
  title: {
    rendered: string;
  };
  featured_image_url?: string;
  author?: string;
  date?: string;
}

interface AllCategoryProps {
  initialPosts: Post[];
  numberOfPosts: number;
  category: string;
  totalPages: number;
}

const CategoryPostsClient: React.FC<AllCategoryProps> = ({
  initialPosts,
  category,
  numberOfPosts,
  totalPages,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const initialRender = useRef(true);

  const getCategoryPosts = async (
    numberOfPosts: number,
    page: number,
    category: string
  ): Promise<Post[]> => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${category}&per_page=${numberOfPosts}&page=${page}`,
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  };

  const updatePostsdata = async (page: number) => {
    setLoading(true);
    // console.log("insideupdate", page);
    try {
      const postsData = await getCategoryPosts(numberOfPosts, page, category);
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

    updatePostsdata(page);
    console.log("effect called");
  }, [page]);

  const loadMore = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }
    console.log("loadmore", page);
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
              <Link href={`/blogs/${post.slug}`}>
                <Image
                  className="card-img-top"
                  src={
                    post.featured_image_url ||
                    "https://via.placeholder.com/600x400"
                  }
                  alt="Card image cap"
                  width="600"
                  height="400"
                  placeholder="blur"
                  blurDataURL="/placeholder-image.webp"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="noPostsWrap shadow24" style={{ textAlign: "center" }}>
          No posts found!
        </p>
      )}
      {loading && <p className="loadingText">Loading...</p>}
      {!loading && hasMore && totalPages > page && (
        <div className="row" style={{ display: "block" }}>
          <button onClick={loadMore} className="btn btn-primary load_more_btn">
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryPostsClient;
