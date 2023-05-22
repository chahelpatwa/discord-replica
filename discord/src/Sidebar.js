import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SidebarChannel from './SidebarChannel';
import { MdExpandMore } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsFillMicFill } from "react-icons/bs";
import { IoHeadset } from "react-icons/io5";
import { RiSettings3Fill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';

function Sidebar() {
  const user = useSelector(selectUser)
  const [Channels, setChannels] = useState([])

  useEffect(() => {
    db.collection('channels').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        channel: doc.data(),
      })))
    })
  }, [])

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name")

    if(channelName){
      db.collection('channels').add({
        channelName: channelName
      })
    }
  }

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <h3>Frozy</h3>
            <MdExpandMore font size="20px"/>
        </div>

        <div className='sidebar__channels'>
          <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
              <MdExpandMore font size="20px"/>
              <h4>Text Channels</h4>
            </div>
              <MdAdd onClick={handleAddChannel} className='sidebar__addChannel'font size="20px"/>
          </div>
          <div className="sidebar__channelsList">
            {Channels.map(({ id, channel }) => (
              <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
            ))}
          </div>
        </div>
        <div className="sidebar__voice">
          <AiFillSignal className='sidebar__voiceIcon' font size="20px"/>
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className="sidebar__voiceIcons">
            <AiOutlineInfoCircle className='infoIcon' font size="20px"/>
            <IoCall className='callIcon' font size="20px"/>
          </div>
        </div>
        <div className="sidebar__profile">
          <CgProfile className='profileIcon' onClick={() => auth.signOut()} font size='30px' src={user.photo}/>
          <div className="sidebar__profileInfo">
            <h3>{user.displayName}</h3>
            <p>#{user.uid.substring(0,5)}</p>
          </div>
          <div className="sidebar__profileIcons">
            <BsFillMicFill className='micIcon' font size="20px"/>
            <IoHeadset className='headsetIcon' font size="20px"/>
            <RiSettings3Fill className='settingsIcon' font size="20px"/>
          </div>
        </div>
    </div>
  )
}

export default Sidebar