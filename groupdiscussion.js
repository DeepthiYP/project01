// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://freshathon-6fba1-default-rtdb.firebaseio.com/",
  projectId: "your-app",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdefg12345"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// DOM elements
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

// Send message function
function sendMessage() {
  const message = messageInput.value.trim();
  if (message !== '') {
    const msgData = {
      text: message,
      timestamp: Date.now(),
      sender: 'You' // You can replace this with logged-in user name later
    };

    // Push the message to Firebase Realtime Database
    db.ref('mentor-group-messages').push(msgData);

    // Clear the input field after sending the message
    messageInput.value = '';
  }
}

// Send message when clicking "Send"
sendBtn.addEventListener('click', sendMessage);

// Send message when pressing Enter key
messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

// Load messages from Firebase in real-time
db.ref('mentor-group-messages').on('child_added', (snapshot) => {
  const msg = snapshot.val();
  const msgElement = document.createElement('div');
  msgElement.classList.add('message');
  msgElement.classList.add(msg.sender === 'You' ? 'sent' : 'received');
  msgElement.textContent = msg.text;
  chatBox.appendChild(msgElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});
