// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAn3oMrGVaxLgAvLHjQc0BsCKz6nPNlv_A",
    authDomain: "mobilebasket-firebase.firebaseapp.com",
    projectId: "mobilebasket-firebase",
    storageBucket: "mobilebasket-firebase.appspot.com",
    messagingSenderId: "618584782919",
    appId: "1:618584782919:web:228cd81ab6116da8131962"
  };

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app()
}

const auth = firebase.auth()

export {auth};