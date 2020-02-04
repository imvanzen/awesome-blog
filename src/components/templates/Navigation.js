import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.css';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <Link to="/">
      <span className={styles.NavigationLogo}>Awesome Blog</span>
    </Link>
  </nav>
);

export default Navigation;
