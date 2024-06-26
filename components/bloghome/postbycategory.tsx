
// import { fetchPostsByCategory } from "@/services/wordpress";
import Image from "next/image";
import PostbyCategoryClient from "../clientside/PostByCategoryClient";

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

interface PostbyCategoryProps {
  title: string;
  linkText: string;
  link: string;
  numberOfPosts: number;
  category: string;
  loadMoreEnabled?: boolean;
}

const fetchPostsByCategory2 = async (category: string, numberOfPosts: number, page?: number): Promise<Post[]> => {
  const response = await fetch(`${API_BASE_URL}/posts?category_slug=${category}&per_page=${numberOfPosts}&page=${page}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
};

const PostbyCategory: React.FC<PostbyCategoryProps> = async ({
  title,
  linkText,
  link,
  numberOfPosts,
  category,
  loadMoreEnabled = true,
}) => {

  const initialPosts = await fetchPostsByCategory2(category, numberOfPosts, 1);
  
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  // const [page, setPage] = useState<number>(1);
  // const [hasMore, setHasMore] = useState<boolean>(true);
  // const [initialLoad, setInitialLoad] = useState<boolean>(true);

  // const fetchData = async (page: number) => {
  //   setLoading(true);
  //   try {
  //     const postsData = await fetchPostsByCategory(category, numberOfPosts, page);
  //     if (postsData.length === 0) {
  //       setHasMore(false);
  //     } else {
  //       if (initialLoad) {
  //         setPosts(postsData);
  //       } else {
  //         setPosts(prevPosts => [...prevPosts, ...postsData]);
  //       }
  //     }
  //   } catch (err: unknown) {
  //     if (err instanceof Error) {
  //       setError(err.message);
  //     } else {
  //       setError(String(err));
  //     }
  //   } finally {
  //     setLoading(false);
  //     setInitialLoad(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchData(page);
  // }, [category, numberOfPosts, page]);

  // const loadMore = () => {
  //   setPage(prevPage => prevPage + 1);
  // };

  // if (loading && initialLoad) return <LoadingSkeleton />;
  // if (error) return <p>Error: {error}</p>;

  return (
    <>
      {/* <div className="row">
        <header className="d-flex flex-wrap justify-content-between align-items-center pt-4 mb-2">
          <a
            href={link}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <h2 className="fs-4">{title}</h2>
          </a>
          { linkText && (<a href={link} className="">
            {linkText}{" "}
            <Image
              className="iconInLink"
              src="/icons/right-arrow.png"
              alt="web stories"
              width="25"
              height="25"
            />
          </a> )}
        </header>
      </div> */}
      <PostbyCategoryClient 
        initialPosts={initialPosts}
        title={title}
        linkText={linkText}
        link={link}
        numberOfPosts={numberOfPosts}
        category={category}
        loadMoreEnabled={loadMoreEnabled} 
        />
      {/* <div className="row">
        {posts.map((post, index) => (
          <div className="col-md-4" data-index={index} key={post.id}>
            <div className="card mb-4 box-shadow">
              <Link href={`/blogs/${post.slug}`}>
                <Image
                  className="card-img-top"
                  src={
                    post.featured_image_url ||
                    "https://via.placeholder.com/600x400"
                  }
                  alt="Card image cap"
                  width="600"
                  height="400"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div> */}
      {/* {loading && <p className="loadingText">Loading...</p>}
      {loadMoreEnabled && hasMore && !loading && (
        <div className="row">
          <button onClick={loadMore} className="btn btn-primary load_more_btn">Load More</button>
        </div>
      )} */}
    </>
  );
};

export default PostbyCategory;