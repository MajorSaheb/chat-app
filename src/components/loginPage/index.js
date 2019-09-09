import React, { useState } from 'react';
import './loginPage.css';


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
          <label>Email: </label>
          <input type='text' placeholder='Email' onChange={handleNameInput} value={name} required/>
          <label>Password: </label>
          <input type='password' placeholder='Password' onChange={handleNameInput} value={password} required/>
          <button onClick={()=>props.post(name,password)}>Login</button>
        </div>
      </div>
    );
  }

  export default LoginPage;