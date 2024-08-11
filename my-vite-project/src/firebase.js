// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxzPP0FL70Ukjv0CuGriOTR3Y6O_7lYmw",
  authDomain: "toclean-web.firebaseapp.com",
  projectId: "toclean-web",
  storageBucket: "toclean-web.appspot.com",
  messagingSenderId: "464905566084",
  appId: "1:464905566084:web:b5893696282d38eb618fd1",
  measurementId: "G-99N6898KFP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);