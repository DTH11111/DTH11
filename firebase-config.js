// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiGQvtCuowFFzQJEoSNdc94oRBL8_8k4A",
  authDomain: "esp32-dth22.firebaseapp.com",
  databaseURL: "https://esp32-dth22-default-rtdb.firebaseio.com",
  projectId: "esp32-dth22",
  storageBucket: "esp32-dth22.firebasestorage.app",
  messagingSenderId: "276351802784",
  appId: "1:276351802784:web:1ac67db7745344a23118c5",
  measurementId: "G-43YHBQFRS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);