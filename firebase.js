// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDXWZjq6B4eSO94Sch1XI4zlDv9W2C_m2I",
    authDomain: "nft-app-20929.firebaseapp.com",
    projectId: "nft-app-20929",
    storageBucket: "nft-app-20929.appspot.com",
    messagingSenderId: "486899004651",
    appId: "1:486899004651:web:9c27e339d78ec3d18d3aae"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const auth = firebase.auth();
const database = firebase.database();

export { auth, database };