// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAK994bhsx8jbktl5KIVX0iIO2akAkEUY",
    authDomain: "ema-john-simple-6762c.firebaseapp.com",
    projectId: "ema-john-simple-6762c",
    storageBucket: "ema-john-simple-6762c.appspot.com",
    messagingSenderId: "339277209787",
    appId: "1:339277209787:web:056f181cb1814b1360899e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;