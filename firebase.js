// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCeiJ2LhQR-3d7CzgAXX-4PnBO0gERD-10",
  authDomain: "insta-clone-7f4f7.firebaseapp.com",
  projectId: "insta-clone-7f4f7",
  storageBucket: "insta-clone-7f4f7.appspot.com",
  messagingSenderId: "470671783575",
  appId: "1:470671783575:web:91e8b85ac76675dd535bd2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
