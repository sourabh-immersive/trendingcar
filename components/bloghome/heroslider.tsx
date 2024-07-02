import HeroSliderClient from "../clientside/HeroSliderClient";

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

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/posts`, { next: { revalidate: 3600 } });
  const data = await res.json();

  return (
    <>
      <HeroSliderClient initialData={data} />
    </>
  );
};
