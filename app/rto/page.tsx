"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import WideAd from "@/components/advertisements/widead";
import SquareAd from "@/components/advertisements/squaread";
import LongAd from "@/components/advertisements/longad";
import PostbyCategory from "@/components/bloghome/postbycategory";
import PostsList from "@/components/bloghome/postslist";
import { fetchRTOPage } from "@/services/wordpress";
import Content from "@/components/skeletons/content";
import ListCities from "@/components/listcities";
import ListStates from "@/components/ListStates";

interface Page {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  featured_image_url: string;
}

export default function RTO() {
  const [page, setPageData] = useState<Page | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = await fetchRTOPage();

      if (pageData !== undefined) {
        setPageData(pageData);
      }
    };

    fetchData();
  }, []);

  function convertSlugToHeading(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            <nav aria-label="breadcrumb" className="mt-30 mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/" className="text-muted">
                    Home
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-primary"
                  aria-current="page"
                >
                  RTO
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
                  {page ? (
                    <div>
                      <h1>{page.title.rendered}</h1>
                      <Image src={page.featured_image_url} alt={page.title.rendered} width="1024" height="423" />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: page.content.rendered,
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
                  <ListCities slug="madhya-pradesh" />
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
