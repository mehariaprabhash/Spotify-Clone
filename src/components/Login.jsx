import React, { useEffect } from 'react';
import './Login.css'

export default function Login(props) {
  const setToken = props.setToken;

  const extractAccessToken = () => {
    if (window.location.hash) {
      const tokenParam = window.location.hash
        .substring(1)
        .split('&')
        .find(elem => elem.startsWith('access_token'));

      if (tokenParam) {
        const token = tokenParam.split('=')[1];
        setToken(token);
      } else {
        console.error("No access token found in URL.");
      }
    }
  };

  useEffect(() => {
    extractAccessToken();
  });

  const onClickHandle = () => {
    const CLIENT_ID = "b8de62b98c534b9fa2868f26f88930b1";
    const REDIRECT_URI = "http://localhost:3000/callback";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const SCOPE = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];

    window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE.join(" ")}&response_type=token&show_dialog=true`;
  };

  return (
    <div className='login'>
      <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png' alt='spotify logo' />
      <button onClick={onClickHandle}>Connect Spotify</button>
    </div>
  );
}