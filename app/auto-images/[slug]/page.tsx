import RowCards from '@/components/clientside/RowCards';
import Slider from '@/components/slider';
import React from 'react'

const GalleryPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?category_cslug=latest&per_page=${3}`
  );
  const latestPosts = await res1.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?category_cslug=trending&per_page=${3}`
  );
  const trendingPosts = await res2.json();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?slug=${params.slug}`,
    // { next: { revalidate: 3600 } }
  );
  let data = await res.json();
  const imgData = data[0]['gallery_images'];
  // console.log(data);
  return (
    <div className='gallery-Cotentwrap'>
      <h6>Images</h6>
      <h1>{data[0].title.rendered}</h1>
      <Slider imgs={imgData} />
      <div className='contentArea'>
        <div
          dangerouslySetInnerHTML={{
            __html: data[0].content.rendered || "No Content",
          }}
        />

      </div>
      <h4>Latest</h4>
      
      <RowCards
          initialPosts={latestPosts}
          numberOfPosts={3}
          totalPage={1}
        />
        
      <h4>Treding</h4>
      
      <RowCards
          initialPosts={trendingPosts}
          numberOfPosts={3}
          totalPage={1}
        />
    </div>
  )
}

export default GalleryPage;