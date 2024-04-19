import React, { useState } from 'react';
import axios from 'axios';
import '../css/admin.css'

export default function AddSongs() {
  const [songName, setSongName] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songGenre, setSongGenre] = useState('');
  const [songLink, setSongLink] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Sending a POST request to the backend
      const response = await axios.post('http://localhost:8080/addsongs', {
        name: songName,
        artist: songArtist,
        genre: songGenre,
        link: songLink,
      });

      // Handling the response here (you can customize based on your backend response)
      console.log(response.data);
      if(response.data==='adminhome'){
        alert('Song added successfully!');
        window.location.href='/admin'
      }else{
        alert('Song already exists')
        window.location.href='/admin'
      }
      
    } catch (error) {
      console.error('Add Song error:', error);
      alert('An error occurred while adding the song.');
    }
  };

  return (
    <div className='container'>
      <form className='text-center' onSubmit={handleSubmit}>
        <h2>Add Song</h2>
        <label>Song Name:</label>
        <input
          type='text'
          name='name'
          className='form-control'
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
          required
        />
        <br />
        <label>Song Artist:</label>
        <input
          type='text'
          name='artist'
          className='form-control'
          value={songArtist}
          onChange={(e) => setSongArtist(e.target.value)}
          required
        />
        <br />
        <label>Song Genre:</label>
        <input
          type='text'
          name='genre'
          className='form-control'
          value={songGenre}
          onChange={(e) => setSongGenre(e.target.value)}
          required
        />
        <br />
        <label>Song Link:</label>
        <input
          type='text'
          name='link'
          className='form-control'
          value={songLink}
          onChange={(e) => setSongLink(e.target.value)}
          required
        />
        <br />
        <input type='submit' value='ADD SONGS' className='btn' />
      </form>
    </div>
  );
}
