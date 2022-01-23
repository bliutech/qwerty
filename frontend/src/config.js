import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const db = initializeApp({
  apiKey: "AIzaSyBp-1e1K4mJmKDrbIpvqupmbBs2EsG0llM",
  authDomain: "qwerty-2-f6dcb.firebaseapp.com",
  databaseURL: "https://qwerty-2-f6dcb-default-rtdb.firebaseio.com",
  projectId: "qwerty-2-f6dcb",
  storageBucket: "qwerty-2-f6dcb.appspot.com",
  messagingSenderId: "504425589866",
  appId: "1:504425589866:web:d358a470d7d36e731fae13"
});
  

const database = getDatabase()
export default database;