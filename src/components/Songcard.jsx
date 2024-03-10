import { React, useEffect } from 'react';
import './Songcard.css'
import { GrPlayFill, GrPauseFill } from 'react-icons/gr'


export default function Songcard(props) {
    const msToMinutesAndSeconds = (ms) => {
        var minutes = Math.floor(ms / 60000);
        var seconds = ((ms % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    };

    const songdetails = props.songdetails;
    const serialno = songdetails.serialno;
    const dateadded = songdetails.dateadded;
    const duration = msToMinutesAndSeconds(songdetails.duration);
    const title = songdetails.title;
    const album = songdetails.album;
    const singer = songdetails.singer;
    const imageurl = songdetails.imageurl;
    const previewurl = songdetails.previewurl;
    const uniqueid = "songno-" + serialno + "-" + props.playlistId;

    function handleTogglePlay() {
        // console.log(uniqueid)
        props.setSelectedSongDetail({
            title: title,
            singer: singer,
            imageurl: imageurl,
        });
        props.songHandler(uniqueid);
    }

    // if(props.isPlaying){
    //     props.setSelectedSongDetail({
    //         title: title,
    //         singer: singer,
    //         imageurl: imageurl,
    //     });
    // }
    useEffect(() => {
        const parentDiv = document.querySelector(`.${uniqueid}`);
        const audioElement = parentDiv.querySelector('.audio-element');
        if (props.isPlaying) {
            audioElement.play()
        }
        else {
            audioElement.pause()
        }

    }, [props.isPlaying, uniqueid]);


    return (

        <div className={`songcard ${uniqueid}`} onClick={handleTogglePlay}>
            <div className="serialno">
                <span>{serialno}</span>
            </div>
            <div className="title">
                <div className="imageurl">
                    <img src={imageurl} alt="Album Cover" />
                </div>
                <div className="titledetail">
                    <div className="name">
                        <span>{title}</span>
                    </div>
                    <div className="singer">
                        <span>{singer}</span>
                    </div>
                </div>
            </div>
            <div className="album">
                <span>{album}</span>
            </div>
            <div className="dateadded">
                <span>{dateadded}</span>
            </div>
            <div className="duration">
                <span>{duration}</span>
            </div>

            <div className="audio-player">
                <button className="play-button">
                    {props.isPlaying ? <GrPauseFill /> : <GrPlayFill />}
                </button>
                <audio className="audio-element" controls>
                    <source src={previewurl} type="audio/mpeg" />
                </audio>
            </div>
        </div>
    );

}
