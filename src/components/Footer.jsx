import React from 'react'
import './Footer.css'
import PlayerControl from './PlayerControl';
import FooterRight from './FooterRight';
import Selectedsongcard from './Selectedsongcard';


export default function Footer(props) {
  return (
    <div className='footer'>
      <div className="selectedsong">
        <Selectedsongcard selectedSongDetail={props.selectedSongDetail}/>
      </div>
      <PlayerControl
        setFlag={props.setFlag}
        flag={props.flag}
        setForward={props.setForward}
        setBackward={props.setBackward}
      />
      {/* <FooterRight /> */}
    </div>
  )
}
