import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import './App.css';
import Spotify from './components/Spotify';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    if (token && token !== "") {
      setIsLoggedIn(true);
    }
  }, [token]);
  
  // console.log(isLoggedIn,token)
  return (
    <div className="App">
      {isLoggedIn ? (
        <Spotify
          token={token}
          setIsLoggedIn={setIsLoggedIn}
          setToken={setToken}
        />
      ) : (
        <Login token={token} setToken={setToken} />
      )}
    </div>
  );
}

