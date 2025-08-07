// for learning purpose i am using it in the client side

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpHb3mcv_m6lwQ9yddLlrEcenOsfYnQf4",
    authDomain: "info-nest.firebaseapp.com",
    projectId: "info-nest",
    storageBucket: "info-nest.firebasestorage.app",
    messagingSenderId: "533153215203",
    appId: "1:533153215203:web:a09b65be9046ad972d8bd6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;