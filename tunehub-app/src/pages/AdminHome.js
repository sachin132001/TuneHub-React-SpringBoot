import React from 'react'
import { Link } from 'react-router-dom'
import '../css/admin.css'

export default function AdminHome() {
  return (
    <div><h1>Welcome Admin</h1>
    <Link to="/map-songs">ADD SONGS</Link>
    <br/>
    <Link to="/map-viewsongs">VIEW SONGS</Link>
    <br/>
    <Link to="/createplaylist">CREATE PLAYLIST</Link>
    <br/>
    <Link to="/viewPlaylists">VIEW PLAYLISTS</Link>
    </div>
  )
}
