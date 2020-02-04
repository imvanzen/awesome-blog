import React from 'react';
import Navigation from '../templates/Navigation';
import Footer from '../templates/Footer';
import PostsList from '../templates/PostsList';

const Home = () => (
  <div className='Home'>
    <Navigation />
    <PostsList posts={[]} />
    <Footer />
  </div>
);

export default Home;
