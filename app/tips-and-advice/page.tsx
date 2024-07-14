import React, { Suspense } from "react";
import ArchivePosts from "@/components/clientside/ArchivePosts";
import FilterableSelect from "@/components/FilterableSelect";

export default async function Tips() {
  const category = { id: 91, name: "Tips & Advice", slug: "tips-and-advice" };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${
      category.slug
    }&page=${1}&per_page=${9}`,
    { next: { revalidate: 3600 } }
  );
  const initialPosts = await res.json();
  const totalPagesHeader = res.headers.get("x-wp-totalpages");
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0;
  // console.log("initialData:", initialPosts);

  return (
    <main>
      <section className="left-container">
        <h1>Tips & Advice - all latest tips, information and car advice India</h1>
        <FilterableSelect catId={category.id} />
        <ArchivePosts
          initialPosts={initialPosts}
          numberOfPosts={9}
          totalPage={totalPages}
          parentPage={category.slug}
          categorySlug={category.slug}
        />
      </section>
    </main>
  );
}