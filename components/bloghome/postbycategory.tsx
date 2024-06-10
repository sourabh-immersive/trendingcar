"use client";

import React, { useEffect, useState } from "react";
import { fetchPostsbycategory } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import Link from "next/link";

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

const PostbyCategory: React.FC<PostbyCategoryProps> = ({
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

  if (loading) return <LoadingSkeleton />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="PostbyCategory-section">
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
        {posts.map((post, index) => (
          <div className="col-md-4" data-index={index} key={index}>
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
    </div>
  );
};

export default PostbyCategory;
