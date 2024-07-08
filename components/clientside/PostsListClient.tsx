"use client";

import React, { useEffect, useState } from "react";
import { fetchPostsByCategory } from "@/services/wordpress";
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
  author_nicename?: string;
  date?: string;
}

interface PostbyCategoryProps {
  initialPosts: Post[];
  title: string;
  linkText: string;
  link: string;
  numberOfPosts: number;
  category: string;
}

const PostsListClient: React.FC<PostbyCategoryProps> = ({
  initialPosts,
  title,
  linkText,
  link,
  numberOfPosts,
  category,
}) => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  //   const [loading, setLoading] = useState<boolean>(true);
  //   const [error, setError] = useState<string | null>(null);

  //   useEffect(() => {
  //     const getPosts = async () => {
  //       try {
  //         const postsData = await fetchPostsByCategory(category, numberOfPosts);
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
  //   }, [category, numberOfPosts]);

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error: {error}</p>;

  return (
    <div className="PostbyCategory-sidebar mb-4">
      <h4 className="">{title}</h4>
      <div className="latest-posts">
        {posts.map((post, index) => (
          <Link href={`/blogs/${post.slug}`} key={index}>
            <div
              data-index={index}
              className="d-flex align-items-center bordered mb-3"
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
                {/* {post.author_nicename && (
                    <span className="text-muted fz-12">
                      by {post.author_nicename.split(' ')[0]}
                    </span>
                  )} */}
              </div>
            </div>
          </Link>
        ))}
      </div>
      {posts.length === 0 && (
        <p className="noPostsWrap shadow24" style={{ textAlign: "center" }}>
          No posts found!
        </p>
      )}
    </div>
  );
};

export default PostsListClient;
