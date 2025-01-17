import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../molecules/Comment';
import styles from './CommentsList.css';

const NoComments = () => (
  <div className={styles.NoComments}>No comments</div>
);

const CommentsList = ({ comments }) => (
  <div className='CommentsList'>
    { comments.length > 0 ? comments.map(comment => <Comment key={comment.id} comment={comment} />) : <NoComments /> }
  </div>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default CommentsList;
