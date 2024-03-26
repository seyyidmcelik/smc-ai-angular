// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyBqN9kwQrlALHAfSapgc4EzhvsLXaF-XQU",
    authDomain: "smc-ai.firebaseapp.com",
    projectId: "smc-ai",
    storageBucket: "smc-ai.appspot.com",
    messagingSenderId: "776835954501",
    appId: "1:776835954501:web:e3feacbf290f7b8294702c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)