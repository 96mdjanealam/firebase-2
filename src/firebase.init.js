// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfR2odNVjt4hZTfakzz-mC5mg49gNIH8Q",
  authDomain: "fir-2-d374a.firebaseapp.com",
  projectId: "fir-2-d374a",
  storageBucket: "fir-2-d374a.firebasestorage.app",
  messagingSenderId: "909500812890",
  appId: "1:909500812890:web:55ad9924158d42511c9263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);