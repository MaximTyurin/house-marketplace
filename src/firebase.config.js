import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALhDE8whChRZ8eZG1UPFodXNeiXocV9is",
  authDomain: "house-marketplace-app-f21ca.firebaseapp.com",
  projectId: "house-marketplace-app-f21ca",
  storageBucket: "house-marketplace-app-f21ca.appspot.com",
  messagingSenderId: "505653965307",
  appId: "1:505653965307:web:91e30fcd12f40bf7385b5e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();