"use client";

import { useEffect, useState } from "react";
import { fetchPostBySlug } from "@/services/wordpress";
import SquareAd from "@/components/advertisements/squaread";
import LongAd from "@/components/advertisements/longad";
import PostsList from "@/components/bloghome/postslist";
import Content from "./skeletons/content";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  primary_category: string;
  primary_cat_slug: string;
}

interface ClientComponentProps {
  initialData: any;
}

const PostContent: React.FC<ClientComponentProps> = ({ initialData }) => {
  // export default function PostContent({ slug }: { slug: string }) {
  const [post, setPost] = useState(initialData);
  const { title, content } = post[0];
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const postData = await fetchPostBySlug(slug);
  //     if (postData !== null) {
  //       setPost(postData);
  //     }
  //   };

  //   fetchData();
  // }, [slug]);

  return (
    <>
      <div className="row mt-4">
        <section className="left-container">
          <div className="row single-content-area">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              {post ? (
                <div>
                  <h1>{title?.rendered}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content?.rendered || "No Content",
                    }}
                  />
                </div>
              ) : (
                <Content />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PostContent;
