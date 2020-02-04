import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navigation from '../templates/Navigation';
import Footer from '../templates/Footer';
import PostsList from '../templates/PostsList';

const Home = ({ posts }) => (
  <div className='Home'>
    <Navigation />
    <PostsList posts={posts} />
    <Footer />
  </div>
);

Home.propTypes = {
  posts: PropTypes.isRequired,
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.list,
  };
};

export default connect(
  mapStateToProps,
)(Home);
