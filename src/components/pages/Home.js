import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../templates/Navigation';
import Footer from '../templates/Footer';
import PostsList from '../templates/PostsList';
import { fetchAllPosts } from '../../actions';

const Home = ({ getPosts }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({ posts }) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className='Home'>
      <Navigation />
      <PostsList posts={posts} />
      <Footer />
    </div>
  );
};

Home.propTypes = {
  getPosts: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(fetchAllPosts()),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Home);
