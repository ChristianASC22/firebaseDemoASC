import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,//gets my database
  ref,//referance for specific parts of your database
  push,//gnerates a unqiue number
  set,//adds things to your database
  onValue,//shows things in our database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkUIPEgBX3MbuodmHAsmRrrZerdJL8bwo",
  authDomain: "firesbasedemo-11ec6.firebaseapp.com",
  projectId: "firesbasedemo-11ec6",
  storageBucket: "firesbasedemo-11ec6.appspot.com",
  messagingSenderId: "580793505547",
  appId: "1:580793505547:web:945d48f80209a1ab5e740e",
  measurementId: "G-4F7XQCT0WB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
