// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXM2nxBON5jFxTn_7Phdu2nM-F-Xg3PnU",
  authDomain: "interviewme-905bf.firebaseapp.com",
  projectId: "interviewme-905bf",
  storageBucket: "interviewme-905bf.firebasestorage.app",
  messagingSenderId: "126113413445",
  appId: "1:126113413445:web:4f52a8974ce7292110a62c",
  measurementId: "G-KTCYNM8XD1"
};

// Initialize Firebase
const app =!getApps.length? initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);