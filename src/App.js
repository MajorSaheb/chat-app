import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/loginPage';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [name, setName] = useState('');
  const login = (name, password) =>{
    setName(name);
  }
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={() => <LoginPage post={login} />} />
        <Route path="/home" component={() => <Home name={name}/>} />
      </div>
    </Router>
  );
}

export default App;
