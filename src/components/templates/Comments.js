import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AddCommentForm from '../organisms/CommentForm';
import CommentsList from '../organisms/CommentsList';
import { fetchPostComments } from '../../actions';
import styles from './Comments.css';

const Comments = ({ postId, getPostComments }) => {
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
      <AddCommentForm />
      <CommentsList comments={comments} />
    </div>
  );
};

Comments.propTypes = {
  postId: PropTypes.string.isRequired,
  getPostComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostComments: postId => dispatch(fetchPostComments(postId)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Comments);
