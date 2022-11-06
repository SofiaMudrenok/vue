import "firebase/firestore";
import { firebase } from '@firebase/app';
import 'firebase/firestore';
const app = firebase.initializeApp({
    apiKey: "AIzaSyCCvnwSpPXh8D0XHu9hYUoPGKcU9rFmVes",
    authDomain: "dev-pinit.firebaseapp.com",
    projectId: "dev-pinit",
    storageBucket: "dev-pinit.appspot.com",
    messagingSenderId: "365254129498",
    appId: "1:365254129498:web:98240258236225b5d76563",
    measurementId: "G-BFEQRQJ1ZL",
  });
export default app.firestore();
