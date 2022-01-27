import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP7Da4pd7Dnm8JctJdcqlQSiswR3S5-jI",
  authDomain: "food-app-react-native-2f145.firebaseapp.com",
  projectId: "food-app-react-native-2f145",
  storageBucket: "food-app-react-native-2f145.appspot.com",
  messagingSenderId: "774265298159",
  appId: "1:774265298159:web:946b131175d9d8fef88f1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
