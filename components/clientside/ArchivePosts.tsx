"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchPostsByCategory } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import Link from "next/link";
import FilterableSelect from "../FilterableSelect";

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  featured_image_url?: string;
  author_nicename?: string;
  date?: string;
}

interface AllCategoryProps {
  initialPosts: Post[];
  numberOfPosts: number;
  totalPage: number;
  categorySlug: string;
}

const ArchivePosts: React.FC<AllCategoryProps> = ({
  initialPosts,
  numberOfPosts,
  totalPage,
  categorySlug
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${categorySlug}&page=${page}&per_page=${numberOfPosts}`,
      { next: { revalidate: 3600 } }
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
    if (page < totalPage) {
      setPage((prevPage) => prevPage + 1);
    } else {
      setHasMore(false);
    }
  };

  //   console.log('initial page', page);
  // if (loading && initialLoad) return <LoadingSkeleton />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="PostbyCategory-section archive__posts">
      {posts.map((post, index) => (
        <div className="card-custom" data-index={index} key={post.id}>
          <Link href={`/car-news-india/${post.slug}`}>
            <Image
              src={
                post.featured_image_url ||
                "https://via.placeholder.com/315x210"
              }
              alt="Comparison Image"
              width={315}
              height={210}
            />
          </Link>
          <div className="card-body-custom">
          <Link href={`/car-news-india/${post.slug}`}>
            <h5 className="card-title-custom" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          </Link>
            <p className="card-text-custom">
              The Venue N Line produces more power and torque than the Taisor.
              But which one is quicker? Let’s find out
            </p>
            <div className="card-author">
              <div className="author-image">{ (post.author_nicename) ? post.author_nicename.substring(0, 1).toUpperCase() : 'T' }</div>
              <div className="author-details">
                <div>{ post.author_nicename }</div>
                <div>{ post.date }</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {loading && <p className="loadingText">Loading...</p>}
      {!loading && hasMore && (
        <div className="row" style={{ display: "block" }}>
          <button onClick={loadMore} className="btn btn-primary load_more_btn">
            Load More
          </button>
        </div>
      )}
      {!hasMore && <p>No more posts!</p>}
    </div>
  );
};

export default ArchivePosts;
