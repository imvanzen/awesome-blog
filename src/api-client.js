import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getPosts = () => axios.get(`${BASE_URL}/posts`).then(response => response.data);
const getPost = id => axios.get(`${BASE_URL}/posts/${id}`).then(response => response.data);

export {
  getPosts,
  getPost,
};
