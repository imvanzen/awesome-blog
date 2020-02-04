import { getPost, getPosts } from '../api-client';
import { FETCH_ALL_POSTS, FETCH_POST } from './types';

export const fetchAllPostsSuccess = (posts) => {
  return {
    type: FETCH_ALL_POSTS,
    posts,
  };
};

export const fetchPostSuccess = (post) => {
  return {
    type: FETCH_POST,
    post,
  };
};

export const fetchAllPosts = () => dispatch => getPosts()
  .then(posts => dispatch(fetchAllPostsSuccess(posts)))
  .catch((error) => {
    throw (error);
  });

export const fetchPost = id => dispatch => getPost(id)
  .then(post => dispatch(fetchPostSuccess(post)))
  .catch((error) => {
    throw (error);
  });
