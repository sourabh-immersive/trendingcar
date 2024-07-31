import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://www.trendingcar.com";
  const baseUrl = "https://wp.trendingcar.com/wp-json/wp/v2/posts";
  const perPage = 100;
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

  const postSitemapEntries = allPosts.map((post: any) => ({
    url: `${siteUrl}/car-news-india/${post.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const mainPages = [{
    url: `${siteUrl}`,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${siteUrl}/car-news-india`,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${siteUrl}/car-collection`,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${siteUrl}/car-expert-reviews`,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${siteUrl}/tips-and-advice`,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${siteUrl}/auto-images`,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${siteUrl}/rto/sitemap.xml`,
    lastModified: new Date().toISOString(),
  },
  {
    url: `${siteUrl}/auto-images/sitemap.xml`,
    lastModified: new Date().toISOString(),
  }
];

  return [...mainPages, ...postSitemapEntries];
}