import * as firebase from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAWy3ihCgvj3z8uZCv7E9Qz_qShOidTIJo",
  authDomain: "testproject-cafcf.firebaseapp.com",
  projectId: "testproject-cafcf",
  storageBucket: "testproject-cafcf.appspot.com",
  messagingSenderId: "483044433274",
  appId: "1:483044433274:web:a4c2aed137e80bd9e40ac3",
  measurementId: "G-WDXP8KQ4ZK",
};

firebase.initializeApp(config);
const store = getFirestore();

export { store, getDocs, collection };
