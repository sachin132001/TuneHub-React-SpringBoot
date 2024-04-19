import React from 'react';
import {  useLocation } from 'react-router-dom';
import axios from 'axios';
import '../css/customer.css';

export default function CustomerHome() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email');

  
  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/exploreSongs', { email });
      console.log(response.data); // Log the response data to see what it contains
      if (response.data === 'displaysongs') {
        window.location.href = '/map-viewsongs';
      } else if (response.data === 'payment') {
        window.location.href = `/exploreSongs/${email}`;
      }
    } catch (error) {
      alert("An ERROR OCCURRED");
      console.error(error); // Log any errors to the console for debugging
    }
  }
  
  const handleClick2 = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/exploreSongs', { email });
      console.log(response.data); // Log the response data to see what it contains
      if (response.data === 'displaysongs') {
        window.location.href = '/viewPlaylists';
      } else if (response.data === 'payment') {
        window.location.href = `/exploreSongs/${email}`;
      }
    } catch (error) {
      alert("An ERROR OCCURRED");
      console.error(error); // Log any errors to the console for debugging
    }
  }
  

  return (
    <div>
      <h1>Welcome Customer to customer home</h1>
      <button type='submit' onClick={handleClick}>EXPLORE SONGS</button>
     
      <button type='submit' onClick={handleClick2}>EXPLORE PLAYLISTS</button>
    </div>
  );
}
