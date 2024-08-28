// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBF6z4iXMiBOMqLCILUfHlRfpOeOIuZRMc",
  authDomain: "next-app-25047.firebaseapp.com",
  projectId: "next-app-25047",
  storageBucket: "next-app-25047.appspot.com",
  messagingSenderId: "367082811275",
  appId: "1:367082811275:web:4dada0743a1e45eacd098e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) ;
export{

  db
};