import React, { Suspense } from "react";
import Image from "next/image";
import WideAd from "@/components/advertisements/widead";
import SquareAd from "@/components/advertisements/squaread";
import LongAd from "@/components/advertisements/longad";
import HeroSlider from "@/components/bloghome/heroslider";
import WebStories from "@/components/bloghome/webstories";
import PostbyCategory from "@/components/bloghome/postbycategory";
import PostsList from "@/components/bloghome/postslist";

export default function Blogs() {
  return (
    <main>
      <div className="row mt-4">
        <section className="left-container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <HeroSlider />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <WebStories />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <WideAd img_url="/ads2.png" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <PostbyCategory
                title="Luxurious Cars"
                linkText="View more posts"
                link="/blogs/categories/luxurious-cars"
                numberOfPosts={6}
                category="luxurious-cars"
                loadMoreEnabled={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <WideAd img_url="/image-9.png" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <PostbyCategory
                title="Luxurious Cars"
                linkText="View more posts"
                link="/blogs/categories/luxurious-cars"
                numberOfPosts={3}
                category="luxurious-cars"
                loadMoreEnabled={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <PostbyCategory
                title="Videos"
                linkText="View more posts"
                link="/blogs/categories/luxurious-cars"
                numberOfPosts={3}
                category="luxurious-cars"
                loadMoreEnabled={false}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <WideAd img_url="/image-9.png" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <PostbyCategory
                title="Car Collections	"
                linkText="View all collections"
                link="/blogs/categories/car-collections"
                numberOfPosts={3}
                category="car-collections"
                loadMoreEnabled={false}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
