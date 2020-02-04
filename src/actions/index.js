import { getPost, getPostComments, getPosts } from '../api-client';
import { FETCH_ALL_POSTS, FETCH_POST, FETCH_POST_COMMENTS } from './types';

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

export const fetchPostCommentsSuccess = (comments) => {
  return {
    type: FETCH_POST_COMMENTS,
    comments,
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

export const fetchPostComments = postId => dispatch => getPostComments(postId)
  .then(comments => dispatch(fetchPostCommentsSuccess(comments)))
  .catch((error) => {
    throw (error);
  });
