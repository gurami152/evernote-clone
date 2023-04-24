// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5sJcxnzV4sNIb3Qs2_PXxwZSTc5UJM20",
  authDomain: "evernoteclone-c7700.firebaseapp.com",
  projectId: "evernoteclone-c7700",
  storageBucket: "evernoteclone-c7700.appspot.com",
  messagingSenderId: "440934023174",
  appId: "1:440934023174:web:cd8fe0243db6a745630387"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const database = getFirestore(app);