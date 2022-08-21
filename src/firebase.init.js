// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALZ4Hf8QfX6zhgAGtdQWPv3mFCna7KFgA",
  authDomain: "ed-tech-3ec25.firebaseapp.com",
  projectId: "ed-tech-3ec25",
  storageBucket: "ed-tech-3ec25.appspot.com",
  messagingSenderId: "1008217483357",
  appId: "1:1008217483357:web:5ff1901a701c29a0a785b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);
export default auth;