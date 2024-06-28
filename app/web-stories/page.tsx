import AllWebstoriesClient from "@/components/clientside/AllWebstoriesClient";

const API_BASE_URL = "https://wp.trendingcar.com/wp-json/custom/v2";

interface Post {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;
  content: string;
  date?: string;
}

const fetchallWebstories = async (): Promise<Post[]> => {
  const response = await fetch(`${API_BASE_URL}/webstories`, {
    method: "GET",
    cache: "no-store",
  });
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

export default async function Page() {
  const initialPosts = await fetchallWebstories();

  return (
    <>
      <AllWebstoriesClient initialPosts={initialPosts} numberOfPosts={18} />
    </>
  );
};
