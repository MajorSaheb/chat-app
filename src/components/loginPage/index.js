import React, { useState } from 'react';
import './loginPage.css';
import { Link } from "react-router-dom";


function LoginPage(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('')
  const handleNameInput = e => {
    e.target.type==="text" ? setName(e.target.value) : setPassword(e.target.value);
  };
    return (
      <div className="loginPage">
        <div className="content">
          <h3>Login</h3>
          <label>Name: </label>
          <input type='text' placeholder='Name' onChange={handleNameInput} value={name} required/>
          <label>Password: </label>
          <input type='password' placeholder='Password' onChange={handleNameInput} value={password} required/>
          <Link to="/home">
            <button onClick={()=>props.post(name,password)}>Login</button>
          </Link>
        </div>
      </div>
    );
  }

  export default LoginPage;