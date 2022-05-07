// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe2JGvkWfcasgXpbIY5J8_21x00MQ0AGM",
  authDomain: "finaltienda-27204.firebaseapp.com",
  projectId: "finaltienda-27204",
  storageBucket: "finaltienda-27204.appspot.com",
  messagingSenderId: "591043144188",
  appId: "1:591043144188:web:51f15f2a5387e96656aa79",
  measurementId: "G-TNX83YK4QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);