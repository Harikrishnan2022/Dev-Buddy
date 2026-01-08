// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqNeICozKK5p1YRPu5A0GFXXt99Whxlqw",
  authDomain: "dev-buddy-d48fe.firebaseapp.com",
  databaseURL: "https://dev-buddy-d48fe-default-rtdb.firebaseio.com",
  projectId: "dev-buddy-d48fe",
  storageBucket: "dev-buddy-d48fe.firebasestorage.app",
  messagingSenderId: "486358902706",
  appId: "1:486358902706:web:6948a4f7257c1c027de6ab",
  measurementId: "G-DEDZP5D1YV"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);