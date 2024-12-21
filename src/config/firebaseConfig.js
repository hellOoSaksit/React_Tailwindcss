// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIqm0cLk1XyJvcimSVMhyaOZO2J7AsxpQ",
  authDomain: "react-499.firebaseapp.com",
  projectId: "react-499",
  storageBucket: "react-499.firebasestorage.app",
  messagingSenderId: "46182419747",
  appId: "1:46182419747:web:531d60b38493faae13d096",
  measurementId: "G-GHLFMBVPDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth instance
export const database = getDatabase(app); // Export database instance
const analytics = getAnalytics(app);

export default app;
