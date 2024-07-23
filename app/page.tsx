import React, { Suspense } from "react";
import FilterableSelect from "@/components/FilterableSelect";
import SquareAd from "@/components/advertisements/squaread";
import PostsList from "@/components/bloghome/postslist";
import LongAd from "@/components/advertisements/longad";
import HomePosts from "@/components/clientside/HomePosts";
import { Metadata, ResolvingMetadata } from "next";
import fetchYoastSEOData from "@/services/fetchYoastSEOData";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const { subcat } = params;

  const slug = 10118;
  const postType = "pages";
  const apiPath = "wp"; // it should be 'wp' or 'custom'

  const yoastData = await fetchYoastSEOData(slug, postType, apiPath);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: yoastData.title,
    description: yoastData.description,
    keywords: yoastData.keywords,
    openGraph: {
      type: "article",
      locale: "en_US",
      title: yoastData.title,
      description: yoastData.description,
      // url: yoastData.url,
      siteName: yoastData.site_name,
      publishedTime: yoastData.published_time,
      modifiedTime: yoastData.modified_time,
      images: [
        {
          url: yoastData.image,
          width: yoastData.image_width,
          height: yoastData.image_height,
          type: yoastData.image_type,
        },
        ...previousImages,
      ],
    },
    authors: yoastData.author,
  };
}

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
                  link="/tips-and-advice/"
                  numberOfPosts={5}
                  category="tips-and-advice"
                />
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
