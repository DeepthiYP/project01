const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');

function sendMessage() {
  const message = messageInput.value.trim();
  if (message !== '') {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', 'sent');
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    messageInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

sendBtn.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
