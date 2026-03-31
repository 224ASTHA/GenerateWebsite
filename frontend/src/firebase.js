// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-a83f9.firebaseapp.com",
  projectId: "genwebai-a83f9",
  storageBucket: "genwebai-a83f9.firebasestorage.app",
  messagingSenderId: "155303579148",
  appId: "1:155303579148:web:0f66a90a795600bb1c2829"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth , provider}