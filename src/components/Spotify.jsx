import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'
import './Spotify.css'

export default function Spotify(props) {
  // console.log("Spotify component loaded")
  const [playlistID, setPlaylistID] = useState('6n4HgPyvMWqaNTnAv7WL1T');
  const [flag, setFlag] = useState(false);
  const [forward, setForward] = useState(false);
  const [backward, setBackward] = useState(false);
  const handleSearch = (query) => {
    setPlaylistID(query);
    setFlag(false);
  };
  const [selectedSongDetail, setSelectedSongDetail] = useState({
    title: 'no song selected',
    singer: 'no song selected',
    imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiN4C-At9ZtAko_SQiD6ZjGFqvr3-MMh-hw&usqp=CAU',
  });

  return (
    <div className='spotify'>
      <div className='spotify_body'>
        <Sidebar onClickPlaylistCard={handleSearch} />
        <div className='body'>
          <Navbar onSearch={handleSearch} setIsLoggedIn={props.setIsLoggedIn} setToken={props.setToken} />
          <Body
            token={props.token}
            playlistId={playlistID}
            setFlag={setFlag}
            flag={flag}
            forward={forward}
            backward={backward}
            setForward={setForward}
            setBackward={setBackward}
            setSelectedSongDetail={setSelectedSongDetail}
          />
        </div>
      </div>
      <div className='spotify_footer'>
        <Footer
          setFlag={setFlag}
          flag={flag}
          setForward={setForward}
          setBackward={setBackward}
          selectedSongDetail={selectedSongDetail}
        />
      </div>
    </div>
  )
}
