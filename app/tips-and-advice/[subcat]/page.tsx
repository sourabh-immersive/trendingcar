import React, { Suspense } from "react";
import ArchivePosts from "@/components/clientside/ArchivePosts";
import FilterableSelect from "@/components/FilterableSelect";

type Props = {
  params: { brands: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: { params: { subcat: string } }) {
  const category = { id: 91, name: "Tips & Advice", slug: "tips-and-advice" };
  // console.log(params);
const { subcat } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${subcat}&page=${1}&per_page=${9}`,
    { next: { revalidate: 3600 } }
  );
  const initialPosts = await res.json();
  const totalPagesHeader = res.headers.get("x-wp-totalpages");
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0;
  // console.log("Total Pages:", totalPages);

  return (
    <main>
      <section className="left-container">
      {/* <h1>Cars news India - {convertSlugToHeading(brands)} news</h1> */}
      <FilterableSelect catId={category.id} />
        <ArchivePosts
          initialPosts={initialPosts}
          numberOfPosts={9}
          totalPage={totalPages}
          parentPage={category.slug}
          categorySlug={subcat}
        />
      </section>
    </main>
  );
}
