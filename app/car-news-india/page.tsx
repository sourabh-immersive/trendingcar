import React, { Suspense } from "react";
import ArchivePosts from "@/components/clientside/ArchivePosts";
import FilterableSelect from "@/components/FilterableSelect";

export default async function News() {
  const category = { id: 1, name: "Car News", slug: "car-news-india" };

  const childCat = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?parent=${category.id}`,
    { next: { revalidate: 3600 } }
  );
  let childCatData = await childCat.json();
  console.log(childCatData);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${
      category.slug
    }&page=${1}&per_page=${9}`,
    { next: { revalidate: 3600 } }
  );
  const initialPosts = await res.json();
  const totalPagesHeader = res.headers.get("x-wp-totalpages");
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0;
  // console.log("Total Pages:", totalPages);

  return (
    <main>
      <section className="left-container">
        <h1>Car news India - all latest car information and auto news India</h1>
        <FilterableSelect catId={category.id} />
        <ArchivePosts
          initialPosts={initialPosts}
          numberOfPosts={9}
          totalPage={totalPages}
          categorySlug={category.slug}
        />
      </section>
    </main>
  );
}
