import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAtiZQL-TlBJpUI3DLGLtwV8twjY1nU-Mw",
    authDomain: "barter-system-71741.firebaseapp.com",
    databaseURL: "https://barter-system-71741-default-rtdb.firebaseio.com",
    projectId: "barter-system-71741",
    storageBucket: "barter-system-71741.appspot.com",
    messagingSenderId: "603862817865",
    appId: "1:603862817865:web:be8f94a65531f0bbd9b398"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();