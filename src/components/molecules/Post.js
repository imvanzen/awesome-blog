import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './Post.css';

const Post = ({ post: { title, body, id } }) => (
  <article className={styles.Post}>
    <h2>{ title }</h2>
    <p>{ body }</p>
    <BrowserRouter><Link to={`/posts/${id}`}>Czytaj więcej</Link></BrowserRouter>
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
