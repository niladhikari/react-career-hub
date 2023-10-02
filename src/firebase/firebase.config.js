// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_g336bNbbQKmN706U8ifnuYTK2bsGdZk",
  authDomain: "react-career-hub-dccdb.firebaseapp.com",
  projectId: "react-career-hub-dccdb",
  storageBucket: "react-career-hub-dccdb.appspot.com",
  messagingSenderId: "406162131297",
  appId: "1:406162131297:web:22b994a128e2178f675d20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;