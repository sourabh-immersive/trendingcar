import React, { Suspense } from "react";
import FilterableSelect from "@/components/FilterableSelect";
import SquareAd from "@/components/advertisements/squaread";
import PostsList from "@/components/bloghome/postslist";
import LongAd from "@/components/advertisements/longad";
import HomePosts from "@/components/clientside/HomePosts";

export default async function Page() {
  const category = { id: 1, name: "Car News", slug: "car-news-india" };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${
      category.slug
    }&page=${1}&per_page=${20}`,
    // { next: { revalidate: 600 } }
  );
  const initialPosts = await res.json();
  const totalPagesHeader = res.headers.get("x-wp-totalpages");
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0;
  // console.log("Total Pages:", totalPages);

  return (
    <main>
      <section className="rto-layout">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 col-lg-9 col-xl-9 col-xxl-9">
              <div className="left-container">
                <h1>
                  Car news India - all latest car information and auto news
                  India
                </h1>
                <FilterableSelect catId={category.id} />
                <HomePosts
                  initialPosts={initialPosts}
                  numberOfPosts={9}
                  totalPage={totalPages}
                  categorySlug={category.slug}
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-12 col-lg-3 col-xl-3 col-xxl-3">
              <section className="right-container">
                <SquareAd />
                <PostsList
                  title="Latest Posts"
                  linkText="View All"
                  link="/car-news-india/"
                  numberOfPosts={5}
                  category="car-news-india"
                />
                <LongAd />
                <PostsList
                  title="Most Viewed"
                  linkText="View All"
                  link="/car-expert-reviews/"
                  numberOfPosts={5}
                  category="car-expert-reviews"
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
