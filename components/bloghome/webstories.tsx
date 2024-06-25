"use client";

import React, { useEffect, useState } from "react";
import { fetchPosts } from "@/services/wordpress";
import WebstorySkeleton from "../skeletons/webstoryskeleton";
import Image from "next/image";

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
const WebStories: React.FC = () => {
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

  if (loading) return <WebstorySkeleton />;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="webstories-section">
      <div className="row">
        <header className="d-flex flex-wrap justify-content-between align-items-center pt-4 mb-2">
          <a
            href="#"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <h2 className="fs-4">Web Stories</h2>
          </a>

          <a href="#" className="">
            View all stories <Image className="iconInLink" src="/icons/right-arrow.png" alt="web stories" width="25" height="25" />
          </a>
        </header>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" src="https://via.placeholder.com/225x300" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
                Sed vel iaculis massa non vestibulum mi proin volutpat nisi ...
              </h5>
              <p className="card-text">
                <Image src="/icons/clock-icon.png" alt="web stories" width="18" height="18" /> 15 Hours ago
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" src="https://via.placeholder.com/225x300" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
                Sed vel iaculis massa non vestibulum mi proin volutpat nisi ...
              </h5>
              <p className="card-text">
                <Image src="/icons/clock-icon.png" alt="web stories" width="18" height="18" /> 15 Hours ago
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" src="https://via.placeholder.com/225x300" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
                Sed vel iaculis massa non vestibulum mi proin volutpat nisi ...
              </h5>
              <p className="card-text">
                <Image src="/icons/clock-icon.png" alt="web stories" width="18" height="18" /> 15 Hours ago
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card mb-4 box-shadow">
            <img className="card-img-top" src="https://via.placeholder.com/225x300" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">
                Sed vel iaculis massa non vestibulum mi proin volutpat nisi ...
              </h5>
              <p className="card-text">
                <Image src="/icons/clock-icon.png" alt="web stories" width="18" height="18" /> 15 Hours ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStories;
