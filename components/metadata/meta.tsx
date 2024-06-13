import { Metadata, ResolvingMetadata } from 'next'
import { fetchPostBySlug } from "@/services/wordpress"

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
   
  export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const slug = params.slug
   
    const blog = await fetchPostBySlug(slug)
   
    const previousImages = (await parent).openGraph?.images || []
   
    return {
      title: blog?.title.rendered,
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
  }