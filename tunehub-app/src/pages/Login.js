
import '../css/welcome.css'
import axios from 'axios'
import React,{ useState } from 'react';
export default function Login() {

  //use state to store the email and password
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  //Function to handle form Submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const response = await axios.post('http://localhost:8080/login', {
            email: email,
            password: password
        });
        
        console.log(response.data);
        
        if (response.data.role === 'admin') {
            window.location.href = '/admin';
        } else if (response.data.role === 'customer') {
          console.log(response.data.email)
          window.location.href = '/customer?email=' + response.data.email;
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login.');
    }
};

  return (
    <div className='container'>
      <form className="text-center" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email</label>
        <input type="text" name="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br><br></br>
        <label>Password</label>
        <input type="password" name="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br></br><br></br>
        <input type="submit" value="LOGIN" className='btn'/>
      </form>



    </div>
  );
}


