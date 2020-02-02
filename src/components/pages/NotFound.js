import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="NotFound">
    <p style={{ textAlign: 'center' }}>
      Page not found
      <Link to="/">Go to Home</Link>
    </p>
  </div>
);

export default NotFound;
