const API_BASE_URL = 'https://wp.trendingcar.com/wp-json/wp/v2';

export interface Post {
  id: number;
  title: {
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