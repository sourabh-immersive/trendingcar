import type { Metadata, ResolvingMetadata } from 'next';
import React, { Suspense } from "react";
import ArchivePosts from "@/components/clientside/ArchivePosts";
import FilterableSelect from "@/components/FilterableSelect";
import fetchYoastSEOData from '@/services/fetchYoastSEOData';

type Props = {
  params: { subcat: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const { subcat } = params;

  const slug = 'car-news-india';
  const postType = 'categories';
  const apiPath = 'wp'; // it should be 'wp' or 'custom'

  const yoastData = await fetchYoastSEOData(slug, postType, apiPath);
  const previousImages = (await parent).openGraph?.images || [];
  
  return {
    title: yoastData.title,
    description: yoastData.description,
    keywords: yoastData.keywords,
    openGraph: {
      type: 'article',
      locale: 'en_US',
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


export default async function CarNewsIndia() {
  const category = { id: 1, name: "Car News", slug: "car-news-india" };

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
      <h1>Car news India - all latest car information and auto news India</h1>
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
