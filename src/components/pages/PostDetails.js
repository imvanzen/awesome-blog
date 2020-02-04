import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../templates/Footer';
import Navigation from '../templates/Navigation';
import Post from '../molecules/Post';
import { fetchPost } from '../../actions';

const PostDetails = ({ getPost, match: { params: { id } } }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      getPost(id).then(({ post }) => {
        setPost(post);
      });
    }
  }, [id]);

  return (
    <div className='PostDetails'>
      <Navigation />
      {post && <Post post={post} />}
      <Footer />
    </div>
  );
};

PostDetails.propTypes = {
  getPost: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: id => dispatch(fetchPost(id)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(PostDetails);
