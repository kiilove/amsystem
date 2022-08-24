// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU2JsJSN2nlMZw9nlMVKlZE4ppR6XTxPk",
  authDomain: "amsystem-f1dab.firebaseapp.com",
  projectId: "amsystem-f1dab",
  storageBucket: "amsystem-f1dab.appspot.com",
  messagingSenderId: "147536448908",
  appId: "1:147536448908:web:796169cfe2dcfe07f19aa9",
  measurementId: "G-C6QZ2MWNWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
