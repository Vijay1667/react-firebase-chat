// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "See YOUR_FIREBASE_CONFIG",
  authDomain: "vijay-react-fire.firebaseapp.com",
  databaseURL: "See YOUR_FIREBASE_CONFIG",
  projectId: "vijay-react-fire",
  storageBucket: "vijay-react-fire.appspot.com",
  messagingSenderId: "See YOUR_FIREBASE_CONFIG",
  appId: "See YOUR_FIREBASE_CONFIG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
