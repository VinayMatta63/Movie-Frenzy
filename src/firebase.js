import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB3pszHv89mcj2cG76uT-ocHXnQGjnaomw",
  authDomain: "movie-frenzy.firebaseapp.com",
  projectId: "movie-frenzy",
  storageBucket: "movie-frenzy.appspot.com",
  messagingSenderId: "1023351540688",
  appId: "1:1023351540688:web:80bab750294b15fafb07d5",
  measurementId: "G-KZLSQHBMWW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
export { db, auth };
