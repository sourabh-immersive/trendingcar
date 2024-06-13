const API_BASE_URL = "https://wp.trendingcar.com/wp-json/wp/v2";

interface Robots {
  index: boolean;
  follow: boolean;
  maxSnippet: string;
  maxImagePreview: string;
  maxVideoPreview: string;
}

interface OpenGraph {
  locale: string;
  type: "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: {
    url: string;
    width?: number;
    height?: number;
    type?: string;
  }[];
}

interface YoastHeadJson {
  title: string;
  robots: {
    index: string;
    follow: string;
    'max-snippet': number;
    'max-image-preview': "none" | "standard" | "large" | undefined;
    'max-video-preview': string;
  };
  og_locale: string;
  og_type: "website" | "article" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";
  og_title: string;
  og_description: string;
  og_url: string;
  og_site_name: string;
  article_modified_time: string;
  og_image: {
    width: number;
    height: number;
    url: string;
    type: string;
  }[];
  twitter_card: "summary" | "summary_large_image" | "player" | "app";
  twitter_misc: {
    [key: string]: string;
  };
  schema: {
    '@context': string;
    '@graph': {
      '@type': string;
      '@id': string;
      url?: string;
      name?: string;
      isPartOf?: {
        '@id': string;
      };
      primaryImageOfPage?: {
        '@id': string;
      };
      image?: {
        '@id': string;
      };
      thumbnailUrl?: string;
      datePublished?: string;
      dateModified?: string;
      breadcrumb?: {
        '@id': string;
      };
      inLanguage?: string;
      potentialAction?: {
        '@type': string;
        target?: string | {
          '@type': string;
          urlTemplate: string;
        }[];
        'query-input'?: string;
      }[];
    }[];
  };
}

export interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  primary_category: string;
  primary_cat_slug: string;
  yoast_head_json: YoastHeadJson;
}


export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
};

export const fetchPostById = async (id: number): Promise<Post | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch post with id ${id}:`, error);
    return null;
  }
};

export const fetchPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts?slug=${slug}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post[] = await response.json();
    if (data.length === 0) {
      throw new Error("Post not found");
    }
    return data[0];
  } catch (error) {
    console.error(`Failed to fetch post with slug ${slug}:`, error);
    return null;
  }
};

export interface Category {
  slug: string;
  title: string;
  content: {
    rendered: string;
  };
}

interface Category2 {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  // Add any other fields as necessary
}


export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Category[] = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
};

export const fetchCategoryBySlug = async (
  slug: string
): Promise<Category | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/category_slug/${slug}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Category = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch category with id ${slug}:`, error);
    return null;
  }
};

export const fetchPostsByCategory = async (
  category: string,
  numberOfPosts: number,
  page: number = 1
): Promise<Post[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/posts?category_slug=${category}&per_page=${numberOfPosts}&page=${page}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch posts:`, error);
    return [];
  }
};

export const fetchCategoryNameBySlug = async (
  slug: string
): Promise<Category2 | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/categories?slug=${slug}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: Category2[] = await response.json();
    if (data.length === 0) {
      throw new Error("Post not found");
    }
    return data[0];
  } catch (error) {
    console.error(`Failed to fetch category with slug ${slug}:`, error);
    return null;
  }
};

