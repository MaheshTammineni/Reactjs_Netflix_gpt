// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFBsxoNvj7keUqsLSxJiExo0ApxWa_XZU",
  authDomain: "netflixgpt-1352d.firebaseapp.com",
  projectId: "netflixgpt-1352d",
  storageBucket: "netflixgpt-1352d.appspot.com",
  messagingSenderId: "238627957516",
  appId: "1:238627957516:web:ee0dce31c4511759913729",
  measurementId: "G-YF8G6VH10J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();