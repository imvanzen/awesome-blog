import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export default {
  getPosts: () => axios.get(`${BASE_URL}/posts`),
  getPost: id => axios.get(`${BASE_URL}/posts/${id}`),
  getComments: postId => axios.get(`${BASE_URL}/posts/${postId}/comments`),
  createComment: (postId) => {},
};
