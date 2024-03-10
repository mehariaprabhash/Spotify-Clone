import React from 'react'
import './Selectedsongcard.css'

export default function Selectedsongcard(props) {
    // console.log(props.selectedSongDetail.title)
    return (
        <div className="selectedsongcard">
            <div className="cardicon">
                <img src={props.selectedSongDetail.imageurl} alt="S" />
            </div>
            <div className="carddetail">
                <div className="title">
                    <span>{props.selectedSongDetail.title}</span>
                </div>
                <div className="singer">
                    <span>{props.selectedSongDetail.singer}</span>
                </div>
            </div>
        </div>
    )
}
