import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './Post.css';

const Post = ({ post }) => (
  <article className={styles.Post}>
    <h2>{ post.title }</h2>
    <p>{ post.body }</p>
    <BrowserRouter><Link to={`/posts/${post.id}`}>Czytaj więcej</Link></BrowserRouter>
  </article>
);

Post.propTypes = {
  post: PropTypes.isRequired,
};

export default Post;
