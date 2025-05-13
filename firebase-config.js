// firebase-config.js
const firebaseConfig = {
  // your config
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();


const firebaseConfig = {
  apiKey: "AIzaSyBo7qdC9YUC0agVL5BwjkAYnjOHg3a3Zbc",
  authDomain: "freshathon-6fba1.firebaseapp.com",
  databaseURL: "https://freshathon-6fba1-default-rtdb.firebaseio.com",
  projectId: "freshathon-6fba1",
  storageBucket: "freshathon-6fba1.firebasestorage.app",
  messagingSenderId: "672088413747",
  appId: "1:672088413747:web:65dd4d4d9a407665a8b546"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;