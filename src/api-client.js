import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getPosts: async () => axios.get(`${BASE_URL}/posts`),
  getPost: (id) => {},
  getComments: (postId) => {},
  createComment: (postId) => {},
};
