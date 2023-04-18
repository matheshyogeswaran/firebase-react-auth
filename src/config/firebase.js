// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX_ANYByhAeakia9gr9JGBbRneV48b8Fg",
  authDomain: "fir-react-2da8a.firebaseapp.com",
  projectId: "fir-react-2da8a",
  storageBucket: "fir-react-2da8a.appspot.com",
  messagingSenderId: "936626566826",
  appId: "1:936626566826:web:639794c3a78d02b55302d3",
  measurementId: "G-5E6F6HE5KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();