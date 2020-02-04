import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getPosts = () => axios.get(`${BASE_URL}/posts`);
const getPost = id => axios.get(`${BASE_URL}/posts/${id}`);

export {
  getPosts,
  getPost,
};
