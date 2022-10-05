// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgKisGxRi03nAQQ9tkfbU8sn99t-D6aqk",
  authDomain: "fir-chat-16ad2.firebaseapp.com",
  projectId: "fir-chat-16ad2",
  storageBucket: "fir-chat-16ad2.appspot.com",
  messagingSenderId: "978150437282",
  appId: "1:978150437282:web:ba28a8e4b744325d9642fb",
  measurementId: "G-BY5HZCXB87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)