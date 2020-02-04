import React from 'react';
import styles from './Footer.css';

const Footer = () => (
  <footer className={styles.Footer}>
    <p className={styles.Footer_description}>
      Awesome Blog &copy;
      {new Date().getFullYear()}
      . Created with 💖
    </p>
  </footer>
);

export default Footer;
