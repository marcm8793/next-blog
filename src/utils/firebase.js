// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "nextjsbloglearningporject.firebaseapp.com",
  projectId: "nextjsbloglearningporject",
  storageBucket: "nextjsbloglearningporject.appspot.com",
  messagingSenderId: "434537369318",
  appId: "1:434537369318:web:1581d02320a4b6340af527",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
