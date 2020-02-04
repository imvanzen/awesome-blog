import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './PostsList.css';

const NoResults = () => (
  <div className={styles.NoPosts}>No posts</div>
);

const PostsList = ({ posts }) => (
  <div className={styles.PostsList}>
    {posts.length > 0 ? posts.map(post => (
      <div key={post.id}>{post.title}</div>
    )) : <NoResults />}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(
  mapStateToProps,
)(PostsList);
