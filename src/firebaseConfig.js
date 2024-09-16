/** @format */

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBEVLkywB3PYIv6cA52xUvSlVab7zay2G8",
  authDomain: "calculator-rpc.firebaseapp.com",
  projectId: "calculator-rpc",
  storageBucket: "calculator-rpc.appspot.com",
  messagingSenderId: "233312045043",
  appId: "1:233312045043:web:0a1bf3d4dbd9b0c0e77486",
  measurementId: "G-6QNZZJR1DM",
};

const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);

export { functions, httpsCallable };
