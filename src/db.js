import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDvznvnRNtkt3OkayytvXSmUrz5_hJAAxk",
    authDomain: "portafolio-df75a.firebaseapp.com",
    projectId: "portafolio-df75a",
    storageBucket: "portafolio-df75a.appspot.com",
    messagingSenderId: "573476069147",
    appId: "1:573476069147:web:7f17abe4ed08324b7dfdbe",
    measurementId: "G-B1HHTFHP38"
  };

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();