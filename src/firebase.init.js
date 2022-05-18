// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVyt2UsQSOkEUV3oA6k9eHXli2qo8honQ",
    authDomain: "todo-app-77497.firebaseapp.com",
    projectId: "todo-app-77497",
    storageBucket: "todo-app-77497.appspot.com",
    messagingSenderId: "326358242824",
    appId: "1:326358242824:web:d3ea3383b7884b28ff63bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;