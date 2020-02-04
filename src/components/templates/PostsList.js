import React from 'react';
import PropTypes from 'prop-types';
import Post from '../molecules/Post';
import styles from './PostsList.css';

const NoResults = () => (
  <div className={styles.NoPosts}>No posts</div>
);

const PostsList = ({ posts }) => (
  <div className={styles.PostsList}>
    {posts.length > 0 ? posts.map(post => (
      <Post key={post.id} post={post} type="short" />
    )) : <NoResults />}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  ).isRequired,
};

export default PostsList;
