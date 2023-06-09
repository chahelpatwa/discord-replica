import React, { useEffect, useState } from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import Message from './Message';
import { MdAddCircle } from "react-icons/md";
import { MdCardGiftcard } from "react-icons/md";
import { AiOutlineGif } from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import db from './firebase'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

function Chat() {
  const user = useSelector(selectUser)  
  const channelId = useSelector(selectChannelId) 
  const channelName = useSelector(selectChannelName)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(()=>{
    if (channelId){
      db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp', 'desc').onSnapshot((snapshot) => setMessages(snapshot.docs.map((doc) => doc.data())));
    }
  }, [channelId])

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('channels').doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    })
    setInput("")
  }

  return (
    <div className='chat'>
      <ChatHeader channelName={channelName}/>

      <div className="chat__messages">
        {messages.map((message) => (
          <Message
          timestamp={message.timestamp}
          message={message.message}
          user={message.user}
          
          />
        ))}
      </div>

      <div className="chat__input">
        <MdAddCircle font size="35px" />
        <form>
          <input value={input} 
          disabled = {!channelId}
          onChange={(e) => setInput(e.target.value)} 
          placeholder={`Message #${channelName}`}/>
          <button 
          disabled = {!channelId}
          className='chat__inputButton' type='submit' onClick={sendMessage}>Send Message</button>
        </form>

        <div className="chat__inputIcons"> 
          <MdCardGiftcard className='giftcardIcon' font size='30px'/>
          <AiOutlineGif className='gifIcon' font size='30px'/>
          <MdEmojiEmotions className='emojiIcon' font size='30px'/>

        </div>
      </div>
    </div>
  )
}

export default Chat