"use client";

import { useEffect, useState } from "react";
import { fetchPostBySlug } from "@/services/wordpress";
import WideAd from "@/components/advertisements/widead";
import SquareAd from "@/components/advertisements/squaread";
import LongAd from "@/components/advertisements/longad";
import PostsList from "@/components/bloghome/postslist";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
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

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await fetchPostBySlug(params.slug);
      if (postData !== null) {
        setPost(postData);
      }
    };

    fetchData();
  }, [params.slug]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav aria-label="breadcrumb" className="mt-30 mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/" className="text-muted">
                    Home
                  </Link>
                </li>
                <li
                  className="breadcrumb-item"
                  aria-current="page"
                ><Link href={`/category/${post?.primary_cat_slug}`} >
                  {post?.primary_category}
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-primary"
                  aria-current="page"
                >
                  {post?.title.rendered}
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <WideAd img_url="/image-9.png" />
        <div className="row mt-4">
          <div className="col-md-9 col-sm-12 col-lg-9 col-xl-9 col-xxl-9">
            <section className="left-container">
              <div className="row single-content-area">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  {post ? (
                    <div>
                      <h1>{post.title.rendered}</h1>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered,
                        }}
                      />
                    </div>
                  ) : (
                    <div>Loading...</div>
                  )}
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-3">
            <section className="right-container">
              <SquareAd />
              <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  <PostsList
                    title="Reviews"
                    linkText="View All"
                    link="/"
                    numberOfPosts={5}
                    category="car"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  EventsSection...
                </div>
              </div>
              <LongAd />
              <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  CommercialVehicles...
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
