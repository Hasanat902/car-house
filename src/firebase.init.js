// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3BM9Vz3_aTCau_qxPKFqdfaKWzS3kzF4",
  authDomain: "car-house-a0eb3.firebaseapp.com",
  projectId: "car-house-a0eb3",
  storageBucket: "car-house-a0eb3.appspot.com",
  messagingSenderId: "723170922297",
  appId: "1:723170922297:web:00de0f4ca991709de4a2e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;