import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/admin.css';

const ViewPlaylist = () => {
  const [playlistData, setPlaylistData] = useState([]);

  useEffect(() => {
    // Fetch the list of playlists from the backend
    const fetchPlaylists = async () => {
      try {
        const response = await axios.get('http://localhost:8080/viewPlaylists');
        setPlaylistData(response.data || []); // Ensure response.data is an array or use an empty array
        
      } catch (error) {
        console.error('Fetch Playlists error:', error);
        // Handle error as needed
      }
    };

    fetchPlaylists();

  }, []); // Empty dependency array ensures useEffect runs only once on component mount
console.log(playlistData)
  return (
    <div className='container'>
      <h2>View Playlists</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Playlist ID</th>
            <th>Playlist NAME</th>
            <th>Playlist SONGS</th>
          </tr>
        </thead>
        <tbody>
  {playlistData.map((playlist) => (
    <tr key={playlist.id}>
      <td>{playlist.id}</td>
      <td>{playlist.name || 'No Name'}</td>
      <td>
        <ul>
          {playlist.songs?.map((song) => (
            <li key={song.id}>
              <span>{song.name}</span>
              <audio controls>
                <source src={song.link} type='audio/mpeg'></source>
              </audio>
            </li>
          )) || <li>No Songs</li>}
        </ul>
      </td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default ViewPlaylist;
