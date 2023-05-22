import React from 'react'
import './ChatHeader.css'
import { IoNotifications } from "react-icons/io5";
import { MdEditLocationAlt } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { MdOutlineHelp } from "react-icons/md";

function ChatHeader({ channelName }) {
  return (
    <div className='chatHeader'>
      <div className="chatHeader__left">
        <h3>
          <span className='chatHeader__hash'>#</span>
          {channelName}
        </h3>

      </div>

      <div className="chatHeader__right">
        <IoNotifications className='notificationIcon' fontSize={20}/>
        <MdEditLocationAlt className='locationIcon' fontSize={20}/>
        <BsPeopleFill className='peopleIcon' fontSize={20}/>

        <div className="chatHeader__search">
          <input placeholder='Search' fontSize={20}/>
          <BiSearch className='searchIcon' fontSize={20}/>
        </div>
        <MdSend className='sendIcon' fontSize={20}/>
        <MdOutlineHelp className='helpIcon' fontSize={20}/>
      </div>
    </div>

  )
}

export default ChatHeader