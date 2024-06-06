import api from './api';

export const fetchPosts = async () => {
    try {
        const response = await api.get('/wp-json/wp/v2/posts');
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const fetchPostById = async (id: number) => {
    try {
        const response = await api.get(`/wp-json/wp/v2/posts/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching post by id:', error);
        throw error;
    }
};
