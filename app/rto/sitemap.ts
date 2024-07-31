import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://www.trendingcar.com";
  const statesBaseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/states";
  const citiesBaseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/cities";
  const perPage = 100;

  async function fetchPosts(baseUrl: string): Promise<any[]> {
    let page = 1;
    let allPosts: any[] = [];
    let totalPages = 1;

    while (page <= totalPages) {
      const response = await fetch(`${baseUrl}?per_page=${perPage}&page=${page}`);
      const posts = await response.json();

      if (posts.length > 0) {
        allPosts = [...allPosts, ...posts];
      }

      totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1", 10);
      page++;
    }

    return allPosts;
  }

  const [statesPosts, citiesPosts] = await Promise.all([
    fetchPosts(statesBaseUrl),
    fetchPosts(citiesBaseUrl),
  ]);

  const allPosts = [...statesPosts, ...citiesPosts];

  return allPosts.map((post: any) => {
    let url = `${siteUrl}/rto/${post.slug}`;
    if (post.type === 'cities') {
      const statSlug = post.stateSlug;
      if (statSlug) {
        url = `${siteUrl}/rto/${statSlug}/${post.slug}`;
      }
    }

    return {
      url,
      lastModified: post.date,
    };
  });
}