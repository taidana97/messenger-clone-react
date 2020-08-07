import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJ1N2ULHaY6mDdjueCmvwwXCgET-BsAKY",
  authDomain: "facebook-messenger-clone-920b6.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-920b6.firebaseio.com",
  projectId: "facebook-messenger-clone-920b6",
  storageBucket: "facebook-messenger-clone-920b6.appspot.com",
  messagingSenderId: "947231588239",
  appId: "1:947231588239:web:3bf8334891b23ba79a95fa",
  measurementId: "G-EW27GJ01LP",
});

const db = firebaseApp.firestore();

export default db;
