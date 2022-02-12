// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpNbspi-inYOIwH2tYzmQEMe0O9adBY9I",
  authDomain: "react-image-upload-58026.firebaseapp.com",
  projectId: "react-image-upload-58026",
  storageBucket: "react-image-upload-58026.appspot.com",
  messagingSenderId: "848424245227",
  appId: "1:848424245227:web:649187ebb9e5ab4fe3abae",
  measurementId: "G-ZJG260RBSV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};


