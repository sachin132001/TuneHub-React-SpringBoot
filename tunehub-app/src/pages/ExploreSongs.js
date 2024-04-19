import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/customer.css';

export default function CustomerHome() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email');

  return (
    <div>
      <h1>Welcome Customer to customer home</h1>
      <Link to={`/exploreSongs?email=${email}`}>Explore Songs</Link>
    </div>
  );
}
