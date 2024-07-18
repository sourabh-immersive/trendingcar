import ArchivePosts from '@/components/clientside/ArchivePosts';
import GalleryPosts from '@/components/clientside/GalleryPosts';
import RowCards from '@/components/clientside/RowCards';
import React from 'react'

interface data {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  }
  featured_image_url?: string;
  author_nicename?: string;
  primary_cat_slug?: string;
  date?: string;
}

const GalleryPage = async () => {

  const res1 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?category_cslug=latest&per_page=${3}`
  );
  const latestPosts = await res1.json();

  const res2 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?category_cslug=trending&per_page=${3}`
  );
  const trendingPosts = await res2.json();

  const res0 = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/images?page=${1}&per_page=${20}`
  );
  const allPosts = await res0.json();
  const totalPagesHeader = res0.headers.get("x-wp-totalpages");
  const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 0;

  // console.log(latestPosts);

  return (
    <div className='gallery-Cotentwrap'>
      <h4>Latest</h4>
      
      <RowCards
          initialPosts={latestPosts}
          numberOfPosts={3}
          totalPage={totalPages}
        />
      <h4>Treding</h4>
      
      <RowCards
          initialPosts={trendingPosts}
          numberOfPosts={3}
          totalPage={totalPages}
        />
      <h4>More Images</h4>
      
      <GalleryPosts
          initialPosts={allPosts}
          numberOfPosts={20}
          totalPage={totalPages}
        />
    </div>
  )
}

export default GalleryPage;