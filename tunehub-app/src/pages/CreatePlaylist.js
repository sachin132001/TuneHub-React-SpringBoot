import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/admin.css';

export default function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState('');
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {
    try {
      const response = await axios.get('http://localhost:8080/createplaylist');
      setSongs(response.data);
    } catch (error) {
      console.error('Fetch Songs error:', error);
      alert('An error occurred while fetching songs.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Get selected songs
      const selectedSongs = songs.filter(song => song.selected);

      // Sending a POST request to the backend
      const response = await axios.post('http://localhost:8080/addplaylist', {
        name: playlistName,
        songs: selectedSongs.map(song => ({ id: song.id, name: song.name }))
      });

      // Handling the response here
      console.log(response.data);
      alert('Playlist added successfully!');
      // Redirect or perform other actions as needed
      if(response.data==='adminhome'){
        window.location.href='/admin'
      }else{
        alert("Could not add playlist")
      }
    } catch (error) {
      console.error('Add Playlist error:', error);
      alert('An error occurred while adding the playlist.');
    }
  };

  const handleSongSelect = (id) => {
    const updatedSongs = songs.map(song =>
      song.id === id ? { ...song, selected: !song.selected } : song
    );
    setSongs(updatedSongs);
  };

  return (
    <div className='container'>
      <form className='text-center' onSubmit={handleSubmit}>
        <h2>Add Playlist</h2>
        <label>Playlist Name:</label>
        <input
          type='text'
          name='name'
          className='form-control'
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />
        <br />
        <label>Select Songs:</label>
        <div>
          {songs.map(song => (
            <div key={song.id}>
              <input
                type='checkbox'
                id={song.id}
                checked={song.selected}
                onChange={() => handleSongSelect(song.id)}
              />
              <label htmlFor={song.id}>{song.name}</label>
            </div>
          ))}
        </div>
        <br />
        <input type='submit' value='ADD PLAYLIST' className='btn' />
      </form>
    </div>
  );
}
