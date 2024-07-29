"use client";

import React, { useEffect, useRef, useState } from "react";
import { fetchPostsByCategory } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import Link from "next/link";
import FilterableSelect from "../FilterableSelect";
import limitWords from "@/utils/limitWords";
import formatDate from "@/utils/formatDate";

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_image_url?: string;
  author_nicename?: string;
  primary_cat_slug?: string;
  date?: string;
}

interface AllCategoryProps {
  initialPosts: Post[];
  numberOfPosts: number;
  totalPage: number;
  parentPage?: string;
  categorySlug?: string;
}

const ArchivePosts: React.FC<AllCategoryProps> = ({
  initialPosts,
  numberOfPosts,
  totalPage,
  parentPage,
  categorySlug,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [initialLoad, setInitialLoad] = useState<boolean>(true);
  const initialRender = useRef(true);

  const parentPathSlug = parentPage ? `/${parentPage}` : "";

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

  // console.log(posts);
  return (
    <div className="PostbyCategory-section archive__posts">
      {posts.map((post, index) => (
        <div className="card-custom" data-index={index} key={post.id}>
          <Link href={`/car-news-india/${post.slug}`}>
              <Image
                src={
                  post.featured_image_url ||
                  "/placeholder-image.webp"
                }
                alt="Comparison Image"
                width={315}
                height={210}
                placeholder="blur"
                blurDataURL="/placeholder-image.webp"
              />
          </Link>
          <div className="card-body-custom">
            <Link href={`/car-news-india/${post.slug}`}>
              <h5
                className="card-title-custom"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </Link>
            <div
              className="card-textt-custom"
              dangerouslySetInnerHTML={{
                __html: limitWords(post.excerpt.rendered, 30),
              }}
              style={{ marginBottom: "0" }}
            />
            <div className="card-author">
              <div className="author-image">{"TC"}</div>
              <div className="author-details">
                <div>{post.author_nicename}</div>
                <div>{formatDate(post.date ? post.date : "")}</div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {posts.length === 0 && (
        <p className="noPostsWrap shadow24" style={{ textAlign: "center" }}>
          No posts found!
        </p>
      )}

      {loading && <p className="loadingText">Loading...</p>}
      {!loading && hasMore && posts.length !== 0 && totalPage > 1 && (
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
