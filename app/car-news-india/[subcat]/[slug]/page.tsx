import { Metadata, ResolvingMetadata } from "next";
import { fetchPostBySlug } from "@/services/wordpress";
import Image from "next/image";
import Content from "@/components/skeletons/content";
import formatDate from "@/utils/formatDate";
import PostShare from "@/components/PostShare";
import RelatedPostsC from "@/components/clientside/RelatedPosts";
import type { Route } from 'next'
import fetchYoastSEOData from "@/services/fetchYoastSEOData";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = params;

  // const slug = 'car-expert-reviews';
  const postType = 'posts';
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

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?slug=${params.slug}`
  );
  let data = await res.json();
  data = data[0];

  function getFirstWord(str: string) {
    return str.split(" ")[0];
  }

  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=car-news-india&exclude=${data.id}&per_page=${3}`
  );
  const RelatedPosts = await res1.json();

  // console.log(data.id);

  return (
    <>
      <div className="single-content-area shadow24">
        <div className="row">
          <div className="col-md-1">
            <div className="socialShareDiv text-center">
              <PostShare title={data.title?.rendered} shareUrl={data.link} />
            </div>
          </div>
          <div className="col-md-11">
            {data ? (
              <div>
                <h1>{data.title?.rendered}</h1>
                <p className="publishText">
                  Published On {formatDate(data.date)} By{" "}
                  {data.author_nicename}
                </p>
                {data.featured_image_url && (
                  <Image
                    src={data.featured_image_url}
                    alt={data.title}
                    width={0}
                    height={0}
                    style={{ width: "100%", height: "auto" }}
                  />
                )}
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.content?.rendered || "No Content",
                  }}
                />
              </div>
            ) : (
              <Content />
            )}

            {data.tag_names != 0 && (
              <div className="post_tags">
                Tags:{" "}
                {data.tag_names.map((tag: string, index: number) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <br />
      <RelatedPostsC
        initialPosts={RelatedPosts}
        numberOfPosts={3}
        totalPage={1}
        parentPage={'car-news-india'}
      />
    </>
  );
}
