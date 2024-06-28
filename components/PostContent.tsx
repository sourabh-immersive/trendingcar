"use client";

import { useEffect, useState } from "react";
import Content from "./skeletons/content";
import Image from "next/image";

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
  featured_image_url: string;
}

interface ClientComponentProps {
  initialData: any;
}

const PostContent: React.FC<ClientComponentProps> = ({ initialData }) => {
  const [post, setPost] = useState(initialData);
  const { title, content, tag_names, featured_image_url } = post[0];

  return (
    <>
      <div className="row">
        <section className="left-container">
          <div className="row single-content-area">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              {post ? (
                <div>
                  
                  <Image src={featured_image_url} alt={title} width={0} height={0} style={{width: '100%', height: 'auto'}} />
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

              {(tag_names != 0) && (
                <div className="post_tags">
                  Tags:{" "}
                  {tag_names.map((tag: string, index: number) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PostContent;
