import axios from 'axios'
import { useState } from 'react';
export default function App() {
  //get request
   const handleGetClick=async()=>{
    const resp=await axios.get("http://localhost:8080/testGet");
    console.log(resp)
   }
  //post request along with data
  const data="hello"
   const handlePostClick=async()=>{
    const resp=await axios.post("http://localhost:8080/testPost",{data});
    console.log(resp)
   }

   //post request along with form data
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const handleFormSubmit=async()=>{
   const resp=await axios.post("http://localhost:8080/testForm",{username,email,password});
   console.log(resp)
  }


  return (
    <div>
   
      <button onClick={handleGetClick}>TEST GET</button>
      <br></br><br></br>
      <button onClick={handlePostClick}>TEST POST</button>
      <br></br><br></br>
      <form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <br></br><br></br>
        <label>Email</label>
        <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br></br><br></br>
        <label>Password</label>
        <input type="text" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <br></br><br></br>
        <input type="submit" value="TEST FORM"/>
      </form>



    </div>
  );
}


