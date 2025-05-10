// script.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ✅ Replace below with your actual config
const firebaseConfig = {
  apiKey: "AIzaSyBo7qdC9YUC0agVL5BwjkAYnjOHg3a3Zbc",
  authDomain: "freshathon-6fba1.firebaseapp.com",
  projectId: "freshathon-6fba1",
  storageBucket: "freshathon-6fba1.firebasestorage.app",
  messagingSenderId: "672088413747",
  appId: "1:672088413747:web:65dd4d4d9a407665a8b546"

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "home.html"; // ✅ only logged-in users can reach this
    })
    .catch((error) => {
      alert("Login failed: " + error.message);
    });
};
