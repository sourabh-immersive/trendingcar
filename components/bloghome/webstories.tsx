import { fetchPosts } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import WebStoriesClient from "../clientside/WebStoriesClient";

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
export default async function WebStories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_CUSTOM_URL}/webstories/?per_page=4`,
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();

  // useEffect(() => {
  //   const getPosts = async () => {
  //     try {
  //       const postsData = await fetchPosts();
  //       setPosts(postsData);
  //     } catch (err: unknown) {
  //       if (err instanceof Error) {
  //         setError(err.message);
  //       } else {
  //         setError(String(err));
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getPosts();
  // }, []);

  return (
    <>
      <WebStoriesClient initialData={data} />
    </>
  );
}
