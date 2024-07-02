import { Metadata, ResolvingMetadata } from 'next';
import ArchiveClient from "@/components/clientside/ArchiveClient";
import Image from "next/image";
import CategoryPostsClient from '@/components/clientside/CategoryPostsClient';

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/wp/v2";

interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  featured_image_url?: string;
  author?: string;
  date?: string;
}

const fetchallpostsByCategory = async (slug: string): Promise<Post[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${slug}&per_page=${12}&page=${1}`, {
    method: 'GET',
    cache: 'no-store'
  });

  // console.log('responseHeader', response.headers.get('x-wp-totalpages'));
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export default async function Page({ params }: { params: { slug: string } }) {
  
  const { slug } = params;
  const initialPosts = await fetchallpostsByCategory(slug);

  const response = await fetch(`${API_BASE_URL}/posts?category_slug=${slug}&per_page=${12}&page=${1}`, {
    method: 'GET',
    cache: 'no-store'
  });

  const totalPages = parseInt(response.headers.get('x-wp-totalpages') || '0', 10);
  console.log('responseHeadern', response.headers.get('x-wp-totalpages'));

  return (
    <>
      <CategoryPostsClient initialPosts={initialPosts} category={slug} numberOfPosts={12} totalPages={totalPages} />
    </>
  );
};
