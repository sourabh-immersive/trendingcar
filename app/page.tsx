import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import styles from './page.module.css'
import WideAd from '@/components/advertisements/widead'
import SquareAd from '@/components/advertisements/squaread'
import LongAd from '@/components/advertisements/longad'
import HeroSlider from '@/components/bloghome/heroslider'
import WebStories from '@/components/bloghome/webstories'
import PostbyCategory from '@/components/bloghome/postbycategory'
import PostsList from '@/components/bloghome/postslist'
import NewAd from '@/components/advertisements/newad'

export default function Home() {
  return (
    <main>
      <NewAd />
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav aria-label="breadcrumb" className="mt-30 mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#" className="text-muted">
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-primary"
                  aria-current="page"
                >
                  Auto
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <WideAd img_url="/image-9.png" />
        <div className="row mt-4">
          <div className="col-md-9 col-sm-12 col-lg-9 col-xl-9 col-xxl-9">
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
                  <PostbyCategory title="Luxurious Cars" linkText='View more posts' link="/" numberOfPosts={6} category="luxurious-cars" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  <WideAd img_url="/image-9.png" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <PostbyCategory title="Luxurious Cars" linkText='View more posts' link="/" numberOfPosts={3} category="luxurious-cars" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <PostbyCategory title="Videos" linkText='View more posts' link="/" numberOfPosts={3} category="luxurious-cars" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                  <WideAd img_url="/image-9.png" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <PostbyCategory title="Car Collections	" linkText='View all collections' link="/" numberOfPosts={3} category="car-collections" /> 
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-3">
            <section className="right-container">
              <SquareAd />
              <div className="row mt-4">
                <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
                <PostsList title="Reviews" linkText='View All' link="/" numberOfPosts={5} category="car" /> 
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
    </main>
  );
}