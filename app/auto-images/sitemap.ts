import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://www.trendingcar.com";
  const galleryBaseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/images";
  const perPage = 100;

  async function fetchPosts(baseUrl: string): Promise<any[]> {
    let page = 1;
    let allPosts: any[] = [];
    let totalPages = 1;

    while (page <= totalPages) {
      const response = await fetch(`${baseUrl}?per_page=${perPage}&page=${page}&_fields=slug,date`);
      const posts = await response.json();

      if (posts.length > 0) {
        allPosts = [...allPosts, ...posts];
      }

      totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1", 10);
      page++;
    }

    return allPosts;
  }

  const [statesPosts] = await Promise.all([
    fetchPosts(galleryBaseUrl),
  ]);

  const allPosts = [...statesPosts];

  return allPosts.map((post: any) => {
    let url = `${siteUrl}/auto-images/${post.slug}`;
    
    return {
      url,
      lastModified: new Date().toISOString(),
    };
  });
}