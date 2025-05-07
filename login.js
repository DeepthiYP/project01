
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import {getDatabase, ref, set, get, child}from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDOJhJAt4H74Ji2I6j3OnG5_0uwxH2hbxY",
    authDomain: "edubridge-1cf25.firebaseapp.com",
    projectId: "edubridge-1cf25",
    storageBucket: "edubridge-1cf25.firebasestorage.app",
    messagingSenderId: "1021326832240",
    appId: "1:1021326832240:web:895da4c64e51e495033ab5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


  // get ref to database services
  const db = getdatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){

    set(ref(db, 'user/' + document.getElementById("username").value),
    {

        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    });

    alert("Login successful !");
  })