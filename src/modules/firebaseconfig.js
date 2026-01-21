// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getDatabase, ref} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF2StPLw2ivwTNEvoOgoQ1HueeUfiyWJc",
    authDomain: "davi-s-reading-list.firebaseapp.com",
    databaseURL: "https://davi-s-reading-list-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "davi-s-reading-list",
    storageBucket: "davi-s-reading-list.firebasestorage.app",
    messagingSenderId: "442545571526",
    appId: "1:442545571526:web:3f25f10e60acd6660bb9c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
export const booksRef = ref(db, '/books');