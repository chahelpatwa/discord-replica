import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA4bWU7Q-sbFYhRBXWKgmVr48583bYWrdg",
    authDomain: "discord-replica-691ab.firebaseapp.com",
    projectId: "discord-replica-691ab",
    storageBucket: "discord-replica-691ab.appspot.com",
    messagingSenderId: "12699216010",
    appId: "1:12699216010:web:f05519b041672d66d92573",
    measurementId: "G-22E8GWEFY9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;
