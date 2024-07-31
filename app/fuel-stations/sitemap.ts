import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://www.trendingcar.com";
  const citiesBaseUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/fuelStationCities`;
  
  async function fetchPosts(baseUrl: string): Promise<any[]> {
    try {
      const response = await fetch(`${baseUrl}`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`);
      }
      const fuelStation = await response.json();
      if (!fuelStation.data) {
        throw new Error('No data field in the response');
      }
      return fuelStation.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }
  
  const [statesPosts] = await Promise.all([
    fetchPosts(citiesBaseUrl),
  ]);

  if (!Array.isArray(statesPosts)) {
    console.error('statesPosts is not an array:', statesPosts);
    return [];
  }

  const allFuelStations = [...statesPosts];
  
  console.log(allFuelStations);

  return allFuelStations.map((post: any) => {
    let url = `${siteUrl}/fuel-stations/${post.slug}`;
    return {
      url,
      lastModified: post.slug,
    };
  });
}
