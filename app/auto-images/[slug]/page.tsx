import RowCards from '@/components/clientside/RowCards';
import Slider from '@/components/slider';
import React from 'react'
import type { Metadata, ResolvingMetadata } from 'next';
import fetchYoastSEOData from '@/services/fetchYoastSEOData';

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;
  // console.log(params)
  // const id = 'car-news-india';
  const postType = 'images';
  const apiPath = 'wp'; // it should be 'wp' or 'custom'
  const yoastData = await fetchYoastSEOData(slug, postType, apiPath);

  const previousImages = (await parent).openGraph?.images || [];
  // console.log(yoastData);
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

const GalleryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?category_cslug=latest&per_page=${3}`
  );
  const latestPosts = await res1.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?category_cslug=trending&per_page=${3}`
  );
  const trendingPosts = await res2.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?slug=${params.slug}`,
    // { next: { revalidate: 3600 } }
  );
  let data = await res.json();
  const imgData = data[0]['gallery_images'];
  // console.log(data);
  return (
    <div className='gallery-Cotentwrap'>
      <h6>Images</h6>
      <h1>{data[0].title.rendered}</h1>
      <Slider imgs={imgData} />
      <div className='contentArea'>
        <div
          dangerouslySetInnerHTML={{
            __html: data[0].content.rendered || "No Content",
          }}
        />

      </div>
      <h4>Latest</h4>
      
      <RowCards
          initialPosts={latestPosts}
          numberOfPosts={3}
          totalPage={1}
        />
        
      <h4>Treding</h4>
      
      <RowCards
          initialPosts={trendingPosts}
          numberOfPosts={3}
          totalPage={1}
        />
    </div>
  )
}

export default GalleryPage;