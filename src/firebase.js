// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database"; // Import the necessary database functions

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "sortir-app.firebaseapp.com",
  databaseURL: "https://sortir-app-default-rtdb.firebaseio.com/",
  projectId: "sortir-app",
  storageBucket: "sortir-app.appspot.com",
  messagingSenderId: "286005606849",
  appId: "1:286005606849:web:995a3d488c13974ec35740"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app); // Use getDatabase to access the Realtime Database
