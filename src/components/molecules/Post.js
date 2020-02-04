import React from 'react';
import Bookmark from 'react-bookmark';
import PropTypes from 'prop-types';
import { HashRouter, Link } from 'react-router-dom';
import styles from './Post.css';

const Post = ({ post: { title, body, id }, type }) => (
  <article className={styles.Post}>
    <h2>{ title }</h2>
    <p>{ body }</p>
    { type === 'short' && (<HashRouter><Link to={`/posts/${id}`}>Czytaj więcej</Link></HashRouter>) }
    { type === 'full' && (<Bookmark className={styles.Post_Bookmark} href={window.location.href} title={title} />) }
  </article>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['short', 'full']).isRequired,
};

export default Post;
