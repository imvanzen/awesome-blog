import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import styles from './Navigation.css';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <BrowserRouter>
      <Link to='/'>
        <span className={styles.NavigationLogo}>Awesome Blog</span>
      </Link>
    </BrowserRouter>
  </nav>
);

export default Navigation;
