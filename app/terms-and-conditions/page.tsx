import { Metadata, ResolvingMetadata } from 'next';
import { fetchStatePostBySlug } from "@/services/wordpress";
import Image from 'next/image';
import Content from '@/components/skeletons/content';

type Props = {
  params: { state: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const slug = params.slug;
  const { state } = params;
  // console.log('stateparams', state);
  const blog = await fetchStatePostBySlug(state);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://trendingcar.com';

  if (!blog || !blog.yoast_head_json) {
    return {
      title: 'Blog Post',
    };
  }

  const yoast = blog.yoast_head_json;
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = yoast.og_image?.[0]?.url || '/some-specific-page-image.jpg';

  return {
    metadataBase: new URL(baseUrl),
    title: yoast.title,
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

export default async function RTO() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pages/9703`, { next: { revalidate: 3600 } });
  const data = await res.json();

  return (
    <section className="left-container">
        <div className="row single-content-area">
          <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
            {data ? (
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.content.rendered,
                  }}
                />
              </div>
            ) : (
              <Content />
            )}
          </div>
        </div>
      </section>
  )
}