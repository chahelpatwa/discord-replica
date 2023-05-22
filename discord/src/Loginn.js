import React from 'react'
import './Loginn.css'
import { auth, provider } from './firebase'

function Loginn() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <div className="login__logo">
            <img src="https://scholar.harvard.edu/sites/scholar.harvard.edu/files/hackathon/files/discord.png?m=1596386214" alt="" />
        </div>
        <button className="signinbtn" onClick={signIn}>Sign In</button>  
    </div>
  )
}

export default Loginn