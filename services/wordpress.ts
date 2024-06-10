const API_BASE_URL = 'https://wp.trendingcar.com/wp-json/wp/v2';

export interface Post {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  // Add more properties as needed
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return [];
  }
};

export const fetchPostById = async (id: number): Promise<Post | null> => {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
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
        throw new Error('Network response was not ok');
      }
      const data: Post[] = await response.json();
      if (data.length === 0) {
        throw new Error('Post not found');
      }
      return data[0];
    } catch (error) {
      console.error(`Failed to fetch post with slug ${slug}:`, error);
      return null;
    }
  };  

export interface Category {
    id: number;
    name: string;
    // Add more properties as needed
  }
  
  export const fetchCategories = async (): Promise<Category[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Category[] = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      return [];
    }
  };
  
  export const fetchCategoryById = async (id: number): Promise<Category | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories/${id}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Category = await response.json();
      return data;
    } catch (error) {
      console.error(`Failed to fetch category with id ${id}:`, error);
      return null;
    }
  };



  export const fetchPostsbycategory = async (category: string, numberOfPosts: number): Promise<Post[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/posts?category_slug=${category}&per_page=${numberOfPosts}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Post[] = await response.json();
      return data;
    } catch (error) {
      console.error(`Failed to fetch posts:`, error);
      return [];
    }
  };