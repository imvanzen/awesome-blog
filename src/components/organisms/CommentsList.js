import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../molecules/Comment';
import styles from './CommentsList.css';

const NoComments = () => (
  <div className={styles.NoComments}>No comments</div>
);

const CommentsList = ({ comments }) => (
  <div className='CommentsList'>
    { comments.length > 0 ? comments.map(comment => <Comment comment={comment} />) : <NoComments /> }
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf({
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
export default CommentsList;
