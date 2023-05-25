import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK03Hl5ia0j3smSzUexNwKwNnwJgAWWug",
  authDomain: "you-chat-cbe55.firebaseapp.com",
  projectId: "you-chat-cbe55",
  storageBucket: "you-chat-cbe55.appspot.com",
  messagingSenderId: "237914053150",
  appId: "1:237914053150:web:acec195cb38b3043d66c0f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { app, db, storage,auth };