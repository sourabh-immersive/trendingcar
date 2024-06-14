"use client";

import { useEffect, useState } from "react";
import { fetchCityPostBySlug } from "@/services/wordpress";
import Link from "next/link";
import WideAd from "@/components/advertisements/widead";
import SquareAd from "@/components/advertisements/squaread";
import LongAd from "@/components/advertisements/longad";
import PostsList from "@/components/bloghome/postslist";
import { CityPost } from "@/services/wordpress";
import Content from "./skeletons/content";
import ListStates from "./ListStates";
import ListCities from "./listcities";

export default function CityContent({ slug, state_slug }: { slug: string, state_slug: string }) {
  const [post, setCityPost] = useState<CityPost | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const cityPostData = await fetchCityPostBySlug(slug);
      if (cityPostData !== null) {
        setCityPost(cityPostData);
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
                <li className="breadcrumb-item">
                  <Link href={`/rto/${state_slug}`} className="text-muted">
                    {convertSlugToHeading(state_slug)}
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
                      <div
                        dangerouslySetInnerHTML={{
                          __html: post.content.rendered,
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
                  <ListCities slug={state_slug} />
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
