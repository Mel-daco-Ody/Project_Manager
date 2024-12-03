// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-adopt-app-ef398.firebaseapp.com",
  projectId: "pet-adopt-app-ef398",
  storageBucket: "pet-adopt-app-ef398.appspot.com",
  messagingSenderId: "1085919702777",
  appId: "1:1085919702777:web:f99887514ef850daef3c28",
  measurementId: "G-R4CX5W92GS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// importing the collection from firebase, do'nt need to provide db name if uisng the default db other wise mention it
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);


export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "pet-adopt-7278b.firebaseapp.com",
  projectId: "pet-adopt-7278b",
  storageBucket: "pet-adopt-7278b.firebasestorage.app",
  messagingSenderId: "221013625440",
  appId: "1:221013625440:web:b13c41b438abc41d7fd105",
  measurementId: "G-2DCVRDPQFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
