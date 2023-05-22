// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8p1el9S97_md0EbZ3HAHOTdbUnPZOMsA",
  authDomain: "hvomax-aeafd.firebaseapp.com",
  projectId: "hvomax-aeafd",
  storageBucket: "hvomax-aeafd.appspot.com",
  messagingSenderId: "1044590726031",
  appId: "1:1044590726031:web:c0110f814c4afccd7759fa",
  measurementId: "G-RW47EZC4VW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
