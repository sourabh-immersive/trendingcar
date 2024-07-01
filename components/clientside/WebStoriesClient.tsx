"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Post {
  title: string;
  content: string;
  date: string;
  featuredImage: string;
  slug: string;
}

interface ClientComponentProps {
  initialData: any;
}

const WebStoriesClient: React.FC<ClientComponentProps> = ({ initialData }) => {
  const [post, setPost] = useState<Post[]>(initialData);

  const [isOpen, setIsOpen] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  const openPopup = (link: string) => {
    setCurrentLink(link);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);
  return (
    <div>
      <div className="webstories-section">
        <div className="row">
          <header className="d-flex flex-wrap justify-content-between align-items-center pt-4 mb-2">
            <a
              href="#"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <h2 className="fs-4">Web Stories</h2>
            </a>

            <Link href="/web-stories" className="">
              View all stories{" "}
              <Image
                className="iconInLink"
                src="/icons/right-arrow.png"
                alt="web stories"
                width="25"
                height="25"
              />
            </Link>
          </header>
        </div>
        <div className="row">
          {post.map((post, key) => (
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
    </div>
  );
};

export default WebStoriesClient;
