// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgqAj3jJCUka9QBEwAhefnfwpM3fL9KDw",
  authDomain: "x-twitter-clone-c9745.firebaseapp.com",
  projectId: "x-twitter-clone-c9745",
  storageBucket: "x-twitter-clone-c9745.appspot.com",
  messagingSenderId: "247186064763",
  appId: "1:247186064763:web:5d8dcf52f06894d63b29de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db, collection, onSnapshot };
