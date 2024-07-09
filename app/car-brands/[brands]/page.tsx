import React, { Suspense } from "react";
import ArchivePosts from "@/components/clientside/ArchivePosts";
import FilterableSelect from "@/components/FilterableSelect";

type Props = {
  params: { brands: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: { params: { brands: string } }) {
  const category = { id: 1, name: "Car News", slug: "car-news-india" };
//   console.log(params.brands);
const { brands } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${brands}&page=${1}&per_page=${9}`,
    { next: { revalidate: 3600 } }
  );
  const initialPosts = await res.json();
  const totalPagesHeader = res.headers.get("x-wp-totalpages");
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0;
  // console.log("Total Pages:", totalPages);

  function convertSlugToHeading(slug: string): string {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <main>
      <section className="left-container">
      {/* <h1>Cars news India - {convertSlugToHeading(brands)} news</h1> */}
      <FilterableSelect catId={category.id} />
        <ArchivePosts
          initialPosts={initialPosts}
          numberOfPosts={9}
          totalPage={totalPages}
          categorySlug={brands}
        />
      </section>
    </main>
  );
}
