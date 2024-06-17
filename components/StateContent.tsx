"use client";

import { useEffect, useState } from "react";
import { fetchStatePostBySlug } from "@/services/wordpress";
import Link from "next/link";
import WideAd from "@/components/advertisements/widead";
import SquareAd from "@/components/advertisements/squaread";
import LongAd from "@/components/advertisements/longad";
import PostsList from "@/components/bloghome/postslist";
import { StatePost } from "@/services/wordpress";
import Content from "./skeletons/content";
import ListStates from "./ListStates";
import ListCities from "./listcities";
import Image from "next/image";
import FAQ from "./FAQ";

export default function StateContent({ slug }: { slug: string }) {
  const [post, setStatePost] = useState<StatePost | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const cityPostData = await fetchStatePostBySlug(slug);
      if (cityPostData !== null) {
        setStatePost(cityPostData);
      }
    };

    fetchData();
  }, [slug]);

  function convertSlugToHeading(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

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
                <li className="breadcrumb-item">
                  <Link href="/rto" className="text-muted">
                    RTO
                  </Link>
                </li>
                <li
                  className="breadcrumb-item active text-primary"
                  aria-current="page"
                >
                  {post? (convertSlugToHeading(post?.slug)) : ''}
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
                      <Image src={post.featured_image_url} alt={post.title.rendered} width="1024" height="423" />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered,
                        }}
                      />
                      <FAQ faqs={post.faqs} />
                    </div>
                  ) : (
                    <Content />
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
                  <ListStates />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  <ListCities slug={slug} />
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
