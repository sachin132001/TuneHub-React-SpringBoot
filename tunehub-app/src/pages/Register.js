import '../css/welcome.css';
import axios from 'axios';
import React, { useState } from 'react';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/register', {
        username,
        email,
        password,
        gender,
        role,
        address,
      });

      // Handle the registration response, for example, show a success message
      console.log(response.data);
      //Redirected bases on the role,for example:
      if(response.data==='login'){
        window.location.href='/map-login';
      
      }else{
        alert('Login failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className='container'>
      <form className='text-center' onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>User Name:</label>
        <input
          type='text'
          name='username'
          className='form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Email ID:</label>
        <input
          type='email'
          name='email'
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type='password'
          name='password'
          className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <label>Gender:</label>
        <div>
          M<input
            type='radio'
            name='gender'
            value='male'
            onChange={() => setGender('male')}
          />
          F<input
            type='radio'
            name='gender'
            value='female'
            onChange={() => setGender('female')}
          />
          O<input
            type='radio'
            name='gender'
            value='other'
            onChange={() => setGender('other')}
          />
        </div>
        <br />
        <label>Role:</label>
        <div>
          Admin<input
            type='radio'
            name='role'
            value='admin'
            onChange={() => setRole('admin')}
          />
          Customer<input
            type='radio'
            name='role'
            value='customer'
            onChange={() => setRole('customer')}
          />
        </div>
        <br />
        <label>Address:</label>
        <textarea
          name='address'
          className='form-control'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <br />
        <input type='submit' value='REGISTER' className='btn' />
      </form>
    </div>
  );
}
