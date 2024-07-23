interface SitemapRoute {
    url: string;
    lastModified?: Date | string;  // Can be Date or string
    changeFrequency?: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never';  // Use specific values
    priority?: number;
  }

const fetchDynamicRoutes = async (): Promise<SitemapRoute[]> => {
  const baseUrl = 'https://wp.trendingcar.com/wp-json/wp/v2/posts';
  const perPage = 100; // Number of posts per page (adjust as needed)
  let page = 1;
  let allPosts: any[] = [];
  let totalPages = 1; // Initial value; will be updated based on the API response

  while (page <= totalPages) {
    const response = await fetch(`${baseUrl}?per_page=${perPage}&page=${page}`);
    const posts = await response.json();
    
    // Check if we have posts, and if so, add them to the allPosts array
    if (posts.length > 0) {
      allPosts = [...allPosts, ...posts];
    }

    // Get total pages from the response headers
    totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1', 10);
    
    page++;
  }

  // Extract URLs from the posts
  return allPosts.map((post: any) => ({
    url: `/posts/${post.id}`,  // Adjust according to your URL structure
    lastModified: new Date(post.date).toISOString(),  // Convert to ISO string
    changeFrequency: 'weekly',  // Default value; adjust as needed
    priority: 0.5,  // Default value; adjust as needed
  }));
};

export default async function SitemapLinks() {
  const staticRoutes: SitemapRoute[] = [
    {
      url: 'https://trendingcar.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://trendingcar.com/about-trending-car',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://trendingcar.com/car-news-india',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const dynamicRoutes = await fetchDynamicRoutes();
  const baseUrl = 'https://trendingcar.com';

  const formattedDynamicRoutes: SitemapRoute[] = dynamicRoutes.map(route => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  return [...staticRoutes, ...formattedDynamicRoutes];
}