"use client";

import { useEffect, useState } from "react";
import PostbyCategory from "@/components/bloghome/postbycategory";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
}

interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  // Add any other fields as necessary
}

export default function Category({ params }: { params: { slug: string } }) {
  const [category, setCategoryName] = useState<Category | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const postData = await fetchCategoryNameBySlug(params.slug);

  //     if (postData !== null) {
  //       setCategoryName(postData);
  //       console.log("final dataff" + postData);
  //     }
  //   };

  //   fetchData();
  // }, [params.slug]);

  function convertSlugToHeading(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <main>
      <div className="row mt-4">
        <section className="left-container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
              <PostbyCategory
                title={
                  category ? category.name : convertSlugToHeading(params.slug)
                }
                linkText=""
                link=""
                numberOfPosts={12}
                category={params.slug}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
