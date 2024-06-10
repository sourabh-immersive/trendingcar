'use client'

import { useEffect, useState } from 'react';
import { fetchPostBySlug } from '@/services/wordpress';

export default function Page({ params }: { params: { slug: string } }) {
  interface Post {
    id: number;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
    };
    // Define other properties as needed
  }

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await fetchPostBySlug(params.slug);
      if (postData !== null) {
        setPost(postData);
      }
    };

    fetchData();
  }, [params.slug]);

  return (
    <div>
      {post ? (
        <div>
          <h1>{post.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
