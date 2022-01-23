import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const db = initializeApp({
  apiKey: "AIzaSyAZpxYMmrt52ewsblpgdBuYfswUx6wWHqQ",
  authDomain: "qwerty-f9aa1.firebaseapp.com",
  databaseURL: "https://qwerty-f9aa1-default-rtdb.firebaseio.com",
  projectId: "qwerty-f9aa1",
  storageBucket: "qwerty-f9aa1.appspot.com",
  messagingSenderId: "38457080982",
  appId: "1:38457080982:web:cbfbc0ec2e85ed3fc656b7",
  measurementId: "G-Y6Q04Q0MS5"
});

  

const database = getDatabase()
export default database;