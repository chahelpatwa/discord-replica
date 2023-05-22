import React from 'react'
import './Message.css'
import { CgProfile } from "react-icons/cg";

function Message({ timestamp, user, message }) {
  return (
    <div className='message'>
        <CgProfile font size='30px' src={user.photo}/>
        <div className="message__info">
            <h4>{user.displayName}
                <span className='message__timestamp'>
                  {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>

            <p>{message}</p>
        </div>
    </div>
  )
}

export default Message