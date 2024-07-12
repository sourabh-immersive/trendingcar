import ArchiveClient from "@/components/clientside/ArchiveClient";
import Image from "next/image";

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/wp/v2";

interface Post {
  id: number;
  slug: string;
  name: string;
  featured_img: string;
  author?: string;
  date?: string;
}

const fetchallCategories = async (): Promise<Post[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/categories?page=${1}&per_page=${18}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const Page = async () => {
  const initialPosts = await fetchallCategories();
  // console.log(initialPosts);
  return (
    <>
      <ArchiveClient initialPosts={initialPosts} numberOfPosts={18} />
    </>
  );
};

export default Page;
