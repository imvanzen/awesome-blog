import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddCommentForm from '../organisms/CommentForm';
import CommentsList from '../organisms/CommentsList';
import { fetchPostComments, createPostComment } from '../../actions';
import styles from './Comments.css';

const Comments = ({ postId, getPostComments, createComment }) => {
  const [comments, setPostComments] = useState([]);

  useEffect(() => {
    if (postId) {
      getPostComments(postId).then((result) => {
        setPostComments(result.comments);
      });
    }
  }, [postId]);

  return (
    <div className={styles.Comments}>
      <AddCommentForm handlerSubmit={comment => createComment(postId, comment)} />
      <CommentsList comments={comments} />
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  getPostComments: PropTypes.func.isRequired,
  createComment: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostComments: postId => dispatch(fetchPostComments(postId)),
    createComment: (postId, comment) => dispatch(createPostComment(postId, comment)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Comments);
