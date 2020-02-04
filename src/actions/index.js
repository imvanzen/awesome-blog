import { getPosts } from '../api-client';
import { FETCH_ALL_POSTS } from './types';

export const fetchAllPostsSuccess = (posts) => {
  return {
    type: FETCH_ALL_POSTS,
    posts,
  };
};

export const fetchAllPosts = () => dispatch => getPosts()
  .then(posts => dispatch(fetchAllPostsSuccess(posts)))
  .catch((error) => {
    throw (error);
  });
