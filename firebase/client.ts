import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBCcx2g2yWviQz1xu4koFy6Znb8j0D88e4",
    authDomain: "mockinterview-5dc5f.firebaseapp.com",
    projectId: "mockinterview-5dc5f",
    storageBucket: "mockinterview-5dc5f.firebasestorage.app",
    messagingSenderId: "352100394606",
    appId: "1:352100394606:web:683d1ccf83262b7359a87f",
    measurementId: "G-LVEG1XG71F"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp() ;
export const auth=getAuth(app);
export const db=getFirestore(app);