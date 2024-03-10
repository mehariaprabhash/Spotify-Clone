import React from 'react'
import './PlaylistCard.css'

export default function PlaylistCard(props) {
    
    const handleOnClickPlaylist = (event) => {
        // console.log("PlaylistCard:: Inside")
        event.preventDefault(); // Prevents form submission and page reload
        props.onClickPlaylistCard(props.playlistId);
    };
    return (
        <div className="playlistcard" onClick={handleOnClickPlaylist}>
            <div className="cardicon">
                <img src={props.imageurl} alt="S" />
            </div>
            <div className="carddetail">
                <div className="heading1">
                    <span>{props.heading1}</span>
                </div>
                <div className="heading2">
                    <span>{props.heading2}</span>
                </div>
            </div>
        </div>
    )
}
