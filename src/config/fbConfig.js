import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDK56Cidly4enjHGD1ZEjYPm8YrnRPjQS0",
  authDomain: "react-social-media-3293d.firebaseapp.com",
  databaseURL: "https://react-social-media-3293d.firebaseio.com",
  projectId: "react-social-media-3293d",
  storageBucket: "react-social-media-3293d.appspot.com",
  messagingSenderId: "214449524061",
  appId: "1:214449524061:web:da187624d7d42a31d86cb4"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const storage = firebase.storage();
export const db = firebase.firestore();
