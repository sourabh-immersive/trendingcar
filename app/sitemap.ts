import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://trendingcar.com";
  const baseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/posts";
  const perPage = 100; // Number of posts per page (adjust as needed)
  let page = 1;

  let allPosts: any[] = [];
  let totalPages = 1;

  while (page <= totalPages) {
    const response = await fetch(`${baseUrl}?per_page=${perPage}&page=${page}`);    
    const posts = await response.json();

    // Check if we have posts, and if so, add them to the allPosts array
    if (posts.length > 0) {
      allPosts = [...allPosts, ...posts];
    }

    // Get total pages from the response headers
    totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1", 10);

    page++;
  }

  return allPosts.map((post: any, index: number) => ({
    url: `${siteUrl}/car-news-india/${post.slug}`,
    lastModified: post.date,
  }));
}