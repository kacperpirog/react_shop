import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTuAzN1gokcegBFU2ErvAc8SOn_k1KryA",
  authDomain: "react-shop-c695c.firebaseapp.com",
  projectId: "react-shop-c695c",
  storageBucket: "react-shop-c695c.appspot.com",
  messagingSenderId: "377451973520",
  appId: "1:377451973520:web:7c0d5668141823847b8115",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
