// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkchgRGdv--932EBYARFBVC268bgcyWq0",
  authDomain: "images-9860e.firebaseapp.com",
  projectId: "images-9860e",
  storageBucket: "images-9860e.appspot.com",
  messagingSenderId: "872721435029",
  appId: "1:872721435029:web:eca78abbd38086d5f74e9c",
  measurementId: "G-L7SJC5LK70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);