import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404!
    <p><Link to="/">Home</Link></p>
  </div>
);

export default NotFoundPage;
