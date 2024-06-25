import { fetchPosts } from "@/services/wordpress";
import LoadingSkeleton from "../skeletons/loadingskeleton";
import Image from "next/image";
import WebStoriesClient from "../clientside/WebStoriesClient";

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/custom/v2";

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
  const res = await fetch(`${API_BASE_URL}/webstories`);
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
};
