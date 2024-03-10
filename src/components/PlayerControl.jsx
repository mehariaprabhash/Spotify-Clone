import React, { useEffect } from 'react'
import './PlayerControl.css'
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from "react-icons/bs";
import {CgPlayTrackNext,CgPlayTrackPrev} from "react-icons/cg"
import {FiRepeat} from "react-icons/fi"

export default function PlayerControl(props) {
  
  useEffect(()=>{
    // toggleflag();
  },[props.flag]);

  const toggleflag = () =>{
    if(props.flag){
        props.setFlag(false);
    }
    else{
        props.setFlag(true);
    }
  };

  const previousHandler = () =>{
    props.setBackward(true);
  };

  const nextHandler = () =>{
    props.setForward(true);
  };

  return (
    <div className="playercontrol">
        <div className="shuffle">
            <BsShuffle />
        </div>

        <div className="previous" onClick={previousHandler}>
            <CgPlayTrackPrev />
        </div>

        <div className="state" onClick={toggleflag}>
            {props.flag?<BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
        </div>

        <div className="next" onClick={nextHandler}>
            <CgPlayTrackNext />
        </div>

        <div className="repeat">
            <FiRepeat />
        </div>
    </div>
  )
}
