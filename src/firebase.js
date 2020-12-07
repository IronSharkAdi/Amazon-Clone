import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDq30cFqhHfM7uYdgxcVpXHt0BHk0kSYro",
    authDomain: "clone-1c35e.firebaseapp.com",
    projectId: "clone-1c35e",
    storageBucket: "clone-1c35e.appspot.com",
    messagingSenderId: "467178009077",
    appId: "1:467178009077:web:c97cab9ee797e397b6f0bc",
    measurementId: "G-VMNH2FE6Z0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const db = firebaseApp.firestore(); 
const auth = firebase.auth();
const base = firebaseApp.database();

export {db , auth , base}