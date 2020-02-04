import React from 'react';
import { HashRouter, Link } from 'react-router-dom';
import styles from './Navigation.css';

const Navigation = () => (
  <nav className={styles.Navigation}>
    <HashRouter>
      <Link to="/">
        <span className={styles.Navigation_Logo}>Awesome Blog</span>
      </Link>
    </HashRouter>
  </nav>
);

export default Navigation;
