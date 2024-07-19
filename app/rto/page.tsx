import { Metadata, ResolvingMetadata } from "next";
import { fetchStatePostBySlug } from "@/services/wordpress";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Content from "@/components/skeletons/content";
import fetchYoastSEOData from "@/services/fetchYoastSEOData";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // const { subcat } = params;

  const slug = '51';
  const postType = 'pages';
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

export default async function RTO() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/pages/51`, {
    next: { revalidate: 3600 },
  });
  const data = await res.json();

  return (
    <section className="left-container">
      <div className="row single-content-area">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xl-12 col-xxl-12">
          {data ? (
            <div>
              <h1>{data.title.rendered}</h1>
              <Image
                src={data.featured_image_url}
                alt={data.title.rendered}
                width="1024"
                height="423"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: data.content.rendered,
                }}
              />
              <FAQ faqs={data.faqs} />
            </div>
          ) : (
            <Content />
          )}
        </div>
      </div>
    </section>
  );
}
