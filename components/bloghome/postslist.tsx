import PostsListClient from "../clientside/PostsListClient";

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

interface PostbyCategoryProps {
  title: string;
  linkText: string;
  link: string;
  numberOfPosts: number;
  category: string;
}

const fetchPostsListByCategory = async (
  category: string,
  numberOfPosts: number,
  page?: number
): Promise<Post[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/posts?category_slug=${category}&per_page=${numberOfPosts}&page=${page}`,
    { next: { revalidate: 3600 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostsList: React.FC<PostbyCategoryProps> = async ({
  title,
  linkText,
  link,
  numberOfPosts,
  category,
}) => {
  const initialPosts = await fetchPostsListByCategory(
    category,
    numberOfPosts,
    1
  );

  return (
    <>
      <PostsListClient
        initialPosts={initialPosts}
        title={title}
        linkText={linkText}
        link={link}
        numberOfPosts={numberOfPosts}
        category={category}
      />
    </>
  );
};

export default PostsList;
