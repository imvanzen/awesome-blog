import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.css';

const Comment = ({ comment: { body, author } }) => (
  <div style={styles.Comment}>
    <div className={styles.Comment_Body}>
      <p>{ body }</p>
    </div>
    <span className={styles.Comment_Signature}>
      Author:
      <span>{ author }</span>
    </span>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
