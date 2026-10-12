
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "demointerview-23684.firebaseapp.com",
  projectId: "demointerview-23684",
  storageBucket: "demointerview-23684.firebasestorage.app",
  messagingSenderId: "23994537232",
  appId: "1:23994537232:web:156e7f1787872336a58195"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}