import React from 'react'
import { Link } from 'react-router-dom'
import '../css/welcome.css'

export default function Index() {
  return (
    <div class="container text-center">
    <h1>Welcome to Tune Hub Application</h1>
    <Link to="/map-register" class="btn my-3">Click here to register</Link>   
     <br/><br></br><br></br><br></br>
    <Link to="/map-login" class="btn my-3">Click here to login</Link>
</div>
  )
}
