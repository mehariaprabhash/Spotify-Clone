import React from 'react'
import {AiOutlinePlaySquare} from "react-icons/ai"
import {PiMicrophoneStageBold,PiDevicesLight} from "react-icons/pi"
import {HiOutlineQueueList} from "react-icons/hi2"
import {GoUnmute} from "react-icons/go"
import {RiPictureInPictureLine} from "react-icons/ri"
import './FooterRight.css'


export default function FooterRight (){
  return (
    <div className="footerright">
        <div className="nowplaying">
            <AiOutlinePlaySquare />
        </div>
        <div className="lyris">
            <PiMicrophoneStageBold />
        </div>
        <div className="queue">
            <HiOutlineQueueList />
        </div>
        <div className="connecttodevice">
            <PiDevicesLight />
        </div>
        <div className="mute">
            <GoUnmute />
        </div>
        <input type="range" min={0} max={100} />
        <div className="pictureinpicture">
            <RiPictureInPictureLine />
        </div>
    </div>
  )
}
