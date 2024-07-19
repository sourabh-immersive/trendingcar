import React, { Suspense } from "react";
import ArchivePosts from "@/components/clientside/ArchivePosts";
import FilterableSelect from "@/components/FilterableSelect";
import ArchivePosts2 from "@/components/clientside/ArchivePosts2";

export default async function Tips() {
  const category = { id: 88, name: "Car Expert Reviews", slug: "car-expert-reviews" };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${
      category.slug
    }&page=${1}&per_page=${9}`,
    // { next: { revalidate: 3600 } }
  );
  const initialPosts = await res.json();
  const totalPagesHeader = res.headers.get("x-wp-totalpages");
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0;
  // console.log("initialData:", initialPosts);

  return (
    <main>
      <section className="left-container">
        <h1>Car Expert Reviews - all latest tips, information and car reviews India</h1>
        <ArchivePosts2
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
