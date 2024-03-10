import React from 'react'
import './Players.css'
import { CiMusicNote1 } from "react-icons/ci"
import { AiOutlineHeart } from "react-icons/ai"

export const Players = () => {
  return (
    <div className="players">
      <div className="myplaylist">
        <div className='item1 player1'><CiMusicNote1 style={{ width: '60px', height: '60px' }} /></div>
        <div className='item2'>
          <div className="heading1">
            <span >My Playlist</span>
          </div>
          <div className="heading2">
            <span >Artist</span>
          </div>
        </div>
      </div>


      <div className="likedsongs">
        <div className='item1 player2'><AiOutlineHeart style={{ width: '60px', height: '60px' }} /></div>
        <div className='item2'>
          <div className="heading1">
            <span >Liked Song</span>
          </div>
          <div className="heading2">
            <span >Playlist. 34 songs</span>
          </div>
        </div>
      </div>
    </div>
  )
}
