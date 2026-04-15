import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfddHfhjyPCvP8mnnHc3cNnQfltlnxqZk",
  authDomain: "partner-matching-app.firebaseapp.com",
  databaseURL: "https://partner-matching-app-285b8-default-rtdb.firebaseio.com",
  projectId: "partner-matching-app",
  storageBucket: "partner-matching-app.appspot.com",
  messagingSenderId: "PASTE",
  appId: "PASTE"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);