import { Metadata, ResolvingMetadata } from "next";
import { fetchPostBySlug } from "@/services/wordpress";
import Image from "next/image";
import Content from "@/components/skeletons/content";
import formatDate from "@/utils/formatDate";
import PostShare from "@/components/PostShare";
import RelatedPostsC from "@/components/clientside/RelatedPosts";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const blog = await fetchPostBySlug(slug);

  // Base URL for your site (use environment variable or hardcode)
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://wp.trendingcar.com/wp-json/wp/v2";

  if (!blog || !blog.yoast_head_json) {
    return {
      title: "Trending Car Blog Post",
    };
  }

  const yoast = blog.yoast_head_json;
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = yoast.og_image?.[0]?.url || "/some-specific-page-image.jpg";

  return {
    metadataBase: new URL(baseUrl),
    title: yoast.title,
    description: yoast.description,
    robots: {
      index: yoast.robots.index === "index",
      follow: yoast.robots.follow === "follow",
      "max-snippet": yoast.robots["max-snippet"],
      "max-image-preview": yoast.robots["max-image-preview"],
      "max-video-preview": yoast.robots["max-video-preview"],
    },
    openGraph: {
      locale: yoast.og_locale,
      type: yoast.og_type,
      title: yoast.og_title,
      description: yoast.og_description,
      url: yoast.og_url,
      siteName: yoast.og_site_name,
      images: [
        {
          url: ogImage,
          width: yoast.og_image?.[0]?.width,
          height: yoast.og_image?.[0]?.height,
          type: yoast.og_image?.[0]?.type,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: yoast.twitter_card,
      title: yoast.og_title,
      description: yoast.og_description,
      images: ogImage,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?slug=${params.slug}`,
    // { next: { revalidate: 3600 } }
  );
  let data = await res.json();
  data = data[0];

  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=tips-and-advice&exclude=${data.id}&per_page=${3}`
  );
  const RelatedPosts = await res1.json();

  function getFirstWord(str: string) {
    return str.split(" ")[0];
  }
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
