// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "zee-estate.firebaseapp.com",
  projectId: "zee-estate",
  storageBucket: "zee-estate.appspot.com",
  messagingSenderId: "942227917856",
  appId: "1:942227917856:web:67bfa0b61ea5d402608045"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);