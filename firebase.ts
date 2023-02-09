import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAvGk2WTO88osnwthRh4ylYqGos5zXKKmo",
    authDomain: "chatgpt-clone-869bc.firebaseapp.com",
    projectId: "chatgpt-clone-869bc",
    storageBucket: "chatgpt-clone-869bc.appspot.com",
    messagingSenderId: "976075103162",
    appId: "1:976075103162:web:b9fc52bfa0af847e889b83",
    measurementId: "G-YERL9K589D"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export { db }