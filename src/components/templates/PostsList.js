import React from 'react';
import PropTypes from 'prop-types';
import Post from '../molecules/Post';
import styles from './PostsList.css';

const NoResults = () => (
  <div className={styles.NoPosts}>No posts</div>
);

const PostsList = ({ posts }) => (
  <div className={styles.PostsList}>
    {posts.length > 0 ? posts.map(({ id, title, body }) => (
      <Post key={id} id={id} title={title} body={body} />
    )) : <NoResults />}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.isRequired,
};

export default PostsList;
