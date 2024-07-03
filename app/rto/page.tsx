"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchRTOPage } from "@/services/wordpress";
import Content from "@/components/skeletons/content";
import FAQ from "@/components/FAQ";

interface FAQ {
  title: string;
  description: string;
}

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
  faqs: FAQ[];
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
    <>
      <section className="left-container">
        <div className="row single-content-area">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            {page ? (
              <div>
                <h1>{page.title.rendered}</h1>
                <Image
                  src={page.featured_image_url}
                  alt={page.title.rendered}
                  width="1024"
                  height="423"
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: page.content.rendered,
                  }}
                />
                <FAQ faqs={page.faqs} />
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
