"use client"

import React, { useEffect, useState } from "react"
import { fetchPostsbycategory } from "@/services/wordpress"
import LoadingSkeleton from "../skeletons/loadingskeleton"
import Image from "next/image"
import Link from "next/link"

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

interface PostbyCategoryProps {
  title: string;
  linkText: string;
  link: string;
  numberOfPosts: number;
  category: string;
}

const PostsList: React.FC<PostbyCategoryProps> = ({
  title,
  linkText,
  link,
  numberOfPosts,
  category,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsData = await fetchPostsbycategory(category, numberOfPosts);
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
  }, [category, numberOfPosts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="PostbyCategory-sidebar">
      <div className="row">
        <header className="d-flex flex-wrap justify-content-between align-items-center pt-4 mb-2">
          <a
            href={link}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <h2 className="fs-4">{title}</h2>
          </a>
          <a href={link} className="">
            {linkText}{" "}
            <Image
              src="/icons/right-arrow.png"
              alt="web stories"
              width="25"
              height="25"
            />
          </a>
        </header>
      </div>
      <div className="row">
      <div className="latest-stories">
            {posts.map((post, index) => (
                <Link href={`/blogs/${post.slug}`} key={index}>
              <div
                data-index={index}
                className="d-flex align-items-center bordered px-2 py-2 mb-2"
              >
                <div className="img-holder me-1 col-auto">
                  <Image
                    src={
                      post.featured_image_url ||
                      "https://via.placeholder.com/150x150"
                    }
                    alt={post.title.rendered}
                    className="img-fluid"
                    width="115"
                    height="64"
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
  );
};

export default PostsList;
