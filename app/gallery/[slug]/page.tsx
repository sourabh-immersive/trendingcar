import Slider from '@/components/slider';
import React from 'react'

const GalleryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?slug=${params.slug}`,
    // { next: { revalidate: 3600 } }
  );
  let data = await res.json();
  data = data[0]['gallery_images'];

  // console.log(data[0]['gallery_images']);

  const imageArray = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
  ];

  return (
    <div>
      <Slider imgs={data} />
    </div>
  )
}

export default GalleryPage;