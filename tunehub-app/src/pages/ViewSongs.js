import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewSongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Using Axios to fetch the song data
    axios.get('http://localhost:8080/map-viewsongs')


      .then(response => {
        // Response data is accessed via `response.data`
        setSongs(response.data);
      })
      .catch(error => console.error('There was an error!', error));
  }, []);

  return (
    <div>
      <h1>Songs List</h1>
    <table border='1'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Artist</th>
          <th>Genre</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id}>
            <td>{song.name}</td>
            <td>{song.artist}</td>
            <td>{song.genre}</td>
            <td>
              <audio controls>
                <source src={song.link} type="audio/mpeg" />
              </audio>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ViewSongs;
