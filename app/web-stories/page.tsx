import AllWebstoriesClient from "@/components/clientside/AllWebstoriesClient";

interface Post {
  id: number;
  slug: string;
  title: string;
  featuredImage: string;
  content: string;
  date?: string;
}

const fetchallWebstories = async (): Promise<Post[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_CUSTOM_URL}/webstories`, { next: { revalidate: 3600 } });
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
