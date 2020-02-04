import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './Post.css';

const Post = ({ title, body, key }) => (
  <article className={styles.Post}>
    <h2>{ title }</h2>
    <p>{ body }</p>
    { key ? <BrowserRouter><Link to={`/posts/${key}`}>Czytaj więcej</Link></BrowserRouter> : null }
  </article>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
