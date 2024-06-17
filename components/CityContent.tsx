"use client";

import { useEffect, useState } from "react";
import { fetchCityPostBySlug } from "@/services/wordpress";
import SquareAd from "@/components/advertisements/squaread";
import LongAd from "@/components/advertisements/longad";
import { CityPost } from "@/services/wordpress";
import Content from "./skeletons/content";
import ListStates from "./ListStates";
import ListCities from "./listcities";
import Image from "next/image";
import FAQ from "./FAQ";

export default function CityContent({
  slug,
  state_slug,
}: {
  slug: string;
  state_slug: string;
}) {
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
    <>
      <section className="left-container">
        <div className="row single-content-area">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            {post ? (
              <div>
                <h1>{post.title.rendered}</h1>
                <Image
                  src={post.featured_image_url}
                  alt={post.title.rendered}
                  width="1024"
                  height="423"
                />
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
    </>
  );
}
