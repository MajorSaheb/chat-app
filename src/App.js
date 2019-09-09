import React from 'react';
import './App.css';
import LoginPage from './components/loginPage';
import { BrowserRouter as Router, Route } from "react-router-dom";

function login(name,password) {
  fetch('https://reqres.in/api/login', {
    method: 'post',
    headers: {
      "access-control-allow-headers": "Origin, X-Requested-With, Content-Type, Accept",
      "access-control-allow-methods": "GET, POST, PUT",
      "access-control-allow-origin": "*",
      "server": "cloudflare-nginx",
    },
    body: `${name}: ${password}`
  })
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={() => <LoginPage post={login} />} />
        {/* <Route path="/login" component={MainView} /> */}
      </div>
    </Router>
  );
}

export default App;
