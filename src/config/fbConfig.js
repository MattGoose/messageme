import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyAo_4-bdLFcoq31O0o-XorzDWHyythV3R0",
    authDomain: "messageme-f5a0b.firebaseapp.com",
    databaseURL: "https://messageme-f5a0b.firebaseio.com",
    projectId: "messageme-f5a0b",
    storageBucket: "messageme-f5a0b.appspot.com",
    messagingSenderId: "170724100537",
    appId: "1:170724100537:web:7c724a0b0763e864990e68",
    measurementId: "G-G6Y43LQQE1"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;