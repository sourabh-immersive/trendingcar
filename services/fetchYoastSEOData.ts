const fetchYoastSEOData = async (slug: any, postType: string, apiPath: string) => {

    const response = await fetch(`https://wp.trendingcar.com/wp-json/${apiPath}/v2/${postType === 'pages' ? `pages/${slug}` : `${postType}?slug=${slug}`}`);

    let posts = await response.json();
    let yoastMeta = [];
    let postData = [];

    if ( postType === 'pages' ) {
      yoastMeta = posts.yoast_head_json || {};
      postData = posts;
    } else {
      yoastMeta = posts[0].yoast_head_json || {};
      postData = posts[0];
    }

    return {
      title: yoastMeta.title,
      description: yoastMeta['og:description'] || yoastMeta.description,
      keywords: ( postData.focus_keywords ) ? postData.focus_keywords : 'Trending Car',
      url: yoastMeta['og:url'] || yoastMeta.og_url,
      site_name: yoastMeta['og:site_name'],
      published_time: yoastMeta['article:published_time'],
      modified_time: yoastMeta['article:modified_time'],
      image: yoastMeta['og:image'] || postData.featured_img || postData.featured_image_url,
      image_width: yoastMeta['og:image:width'],
      image_height: yoastMeta['og:image:height'],
      image_type: yoastMeta['og:image:type'],
      author: yoastMeta['author'] || yoastMeta.author,
      twitter_card: yoastMeta['twitter:card'],
      twitter_label1: yoastMeta['twitter:label1'],
      twitter_data1: yoastMeta['twitter:data1'],
      twitter_label2: yoastMeta['twitter:label2'],
      twitter_data2: yoastMeta['twitter:data2'],
    };
  };

  export default fetchYoastSEOData;
  