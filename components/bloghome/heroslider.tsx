import HeroSliderClient from "../clientside/HeroSliderClient";

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

export default async function HeroSlider() {

  const res = await fetch(`${API_BASE_URL}/posts`, {
    method: 'GET',
    cache: 'no-store'
  });
  const data = await res.json();

  return (
    <>
      <HeroSliderClient initialData={data} />
    </>
  );
};
