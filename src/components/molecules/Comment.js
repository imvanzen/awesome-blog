import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.css';

const Comment = ({ comment: { body, email, name } }) => (
  <div className={styles.Comment}>
    <div className={styles.Comment_Body}>
      <p>{ body }</p>
    </div>
    <span className={styles.Comment_Signature}>
      Author:
      <span><a href={`mailto:${email}`}>{ name }</a></span>
    </span>
  </div>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
