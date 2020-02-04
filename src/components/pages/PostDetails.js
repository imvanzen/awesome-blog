import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from '../templates/Footer';
import Navigation from '../templates/Navigation';
import Post from '../molecules/Post';
import { fetchPost } from '../../actions';

const PostDetails = ({ id, getPost }) => {
  const [post, setPost] = useState({
    id: null, title: null, body: null,
  });

  useEffect(() => {
    if (id) {
      getPost(id).then(({ post }) => {
        setPost(post);
      });
    }
  }, [id, post]);

  return (
    <div className='PostDetails'>
      <Navigation />
      <Post post={post} />
      <Footer />
    </div>
  );
};

PostDetails.propTypes = {
  id: PropTypes.number.isRequired,
  getPost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    id: 1,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: id => dispatch(fetchPost(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostDetails);
