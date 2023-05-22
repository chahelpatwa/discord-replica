import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import {useDispatch, useSelector} from 'react-redux'
import {selectUser} from './features/userSlice'
import Loginn from './Loginn';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // User is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // User is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar/>
        <Chat/>
        </>
      ) : (
        <Loginn/>
      )}
    </div>
  );
}

export default App;
