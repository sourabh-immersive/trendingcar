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
 
  return (
    <div>
      <Slider imgs={data} />
    </div>
  )
}

export default GalleryPage;