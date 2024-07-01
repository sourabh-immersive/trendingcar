import { Metadata, ResolvingMetadata } from 'next';
import { fetchPostBySlug } from "@/services/wordpress";
import PostContent from "@/components/PostContent";

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/wp/v2";

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}



export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const blog = await fetchPostBySlug(slug);

  // Base URL for your site (use environment variable or hardcode)
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wp.trendingcar.com/wp-json/wp/v2';

  if (!blog || !blog.yoast_head_json) {
    return {
      title: 'Trending Car Blog Post',
    };
  }

  const yoast = blog.yoast_head_json;
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = yoast.og_image?.[0]?.url || '/some-specific-page-image.jpg';

  return {
    metadataBase: new URL(baseUrl),
    title: yoast.title,
    description: yoast.description,
    robots: {
      index: yoast.robots.index === 'index',
      follow: yoast.robots.follow === 'follow',
      'max-snippet': yoast.robots['max-snippet'],
      'max-image-preview': yoast.robots['max-image-preview'],
      'max-video-preview': yoast.robots['max-video-preview'],
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
  const res = await fetch(`${API_BASE_URL}/posts?slug=${params.slug}`);
  const data = await res.json();
  // console.log(params);
  // console.log(data);
  return <PostContent initialData={data} />;
}
