import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Body.css';
import Songcard from './Songcard';
// import { GrPlayFill, GrPauseFill } from 'react-icons/gr'
// 'https://api.spotify.com/v1/playlists/6n4HgPyvMWqaNTnAv7WL1T',  B Parak
// 'https://api.spotify.com/v1/playlists/37i9dQZF1DX14CbVHtvHRB', Valentine hits

export default function Body(props) {
  // console.log("Body component loaded")
  const [songlist, setSongList] = useState([]);
  const [playlistname, setPlaylistname] = useState(null);
  const [playlistimageurl, setPlaylistimageurl] = useState(null);
  const [previousSongId, setPreviousSongId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(()=>{
    // songHandler(props.currentSongPlaying)
    if(previousSongId){
      if(props.flag){
        props.setFlag(true);
        setIsPlaying(true);
      }
      else{
        props.setFlag(false);
        setIsPlaying(false);
      }
    }
    else{
      props.setFlag(false);
    }
  },[props.flag]);

  const songHandler = (id) => {
    // console.log("inside songhandler")
    if (previousSongId === id) {
      // setPreviousSongId(null)
      if (isPlaying) {
        props.setFlag(false);
        setIsPlaying(false)
      }
      else {
        props.setFlag(true);
        setIsPlaying(true);
      }
    }
    else {
      setPreviousSongId(id)
      props.setFlag(true);
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    // console.log("Inside forward backward handler")
    if (previousSongId && (props.forward || props.backward)) {
      // console.log("After condition: Inside forward backward handler")
      const count = songlist.length
      const currentsongno = previousSongId.split('-')[1]
      var nextId
      var nextsongno
      if (props.forward) {
        props.setForward(false);
        nextsongno = (currentsongno) % count + 1
        nextId = "songno-" + nextsongno + "-" + props.playlistId;
      }
      if (props.backward) {
        props.setBackward(false);
        nextsongno = (count + currentsongno - 2) % count + 1
        nextId = "songno-" + nextsongno + "-" + props.playlistId;
      }
      // console.log(nextId)
      songHandler(nextId)
      props.setSelectedSongDetail({
        title: songlist[nextsongno-1].title,
        singer: songlist[nextsongno-1].singer,
        imageurl: songlist[nextsongno-1].imageurl,
      });
    }
    props.setForward(false);
    props.setBackward(false);
  }, [props.backward, props.forward]);

  useEffect(() => {
    setSongList([]);
    setPreviousSongId(null);
    const getPlaylist = async () => {
      try {
        // console.log("inside API fetch")
        const endpoint = 'https://api.spotify.com/v1/playlists/' + props.playlistId;
        const response = await axios.get(
          endpoint,

          {
            headers: {
              Authorization: 'Bearer ' + props.token,
              'Content-Type': 'application/json',
            },
          }
        );

        // console.log(response.data.name)

        setPlaylistname(response.data.name);
        setPlaylistimageurl(response.data.images[0].url);
        const songs = [];
        props.setSelectedSongDetail({
          title: 'no song selected',
          singer: 'no song selected',
          imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdiN4C-At9ZtAko_SQiD6ZjGFqvr3-MMh-hw&usqp=CAU',
        });
        var counter = 1
        for (let i = 0; i < response.data.tracks.items.length; i++) {
          const songdetail = response.data.tracks.items[i];

          if (songdetail.track.preview_url) {
            songs.push({
              serialno: counter,
              dateadded: songdetail.added_at.split('T')[0],
              duration: songdetail.track.duration_ms,
              title: songdetail.track.name,
              album: songdetail.track.album.name,
              singer: songdetail.track.album.artists[0].name,
              imageurl: songdetail.track.album.images[0].url,
              previewurl: songdetail.track.preview_url,
            });
            counter = counter + 1
          }
        }
        setSongList(songs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (props.token) {
      getPlaylist();
    }
  }, [props.token, props.playlistId]);

  if (songlist.length === 0) {
    return <div className='mainbody'>Loading...</div>;
  }

  return (
    <div className='mainbody'>
      <div className="playlist-metadata">
        <div className="playlistimage">
          <img src={playlistimageurl} alt={playlistimageurl}></img>
        </div>
        <div className="playlistname">
          <span>{playlistname}</span>
        </div>
      </div>
      <div className="playlist-header">
        <span>#</span>
        <span>Title</span>
        <span>Album</span>
        <span>Date added</span>
        <span>Duration</span>
        <span>Preview</span>
      </div>
      {songlist.map((item, index) => (
        <Songcard
          songdetails={item}
          key={index}
          playlistId={props.playlistId}
          songHandler={songHandler}
          isPlaying={isPlaying && previousSongId !== null && ("songno-" + item.serialno + "-" + props.playlistId) === previousSongId}
          setSelectedSongDetail={props.setSelectedSongDetail}
        />
      ))}
    </div>
  );
}

