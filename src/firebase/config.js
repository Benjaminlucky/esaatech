import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB89IYwO3SA37A_8MGpLQQ1KoYYI-eFxzU",
  authDomain: "esaaconsulting.firebaseapp.com",
  projectId: "esaaconsulting",
  storageBucket: "esaaconsulting.firebasestorage.app",
  messagingSenderId: "784437338696",
  appId: "1:784437338696:web:3dbc3894cf3f1fc2112e7d",
  measurementId: "G-XCSEVNE1RX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app); 