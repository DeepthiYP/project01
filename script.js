// Sidebar
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('backdrop');
const closeBtn = document.getElementById('close-btn');

// Chat
const chatLink = document.getElementById('openChat');
const chatModal = document.getElementById('chatModal');
const chatCloseBtn = document.getElementById('chatCloseBtn');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');
const chatBody = document.getElementById('chatBody');

// Load icons
lucide.createIcons();

// Toggle sidebar
menuToggle.addEventListener('click', () => {
  sidebar.classList.add('open');
  backdrop.classList.add('show');
});

closeBtn.addEventListener('click', closeSidebar);
backdrop.addEventListener('click', closeSidebar);

function closeSidebar() {
  sidebar.classList.remove('open');
  backdrop.classList.remove('show');
}

// Toggle chat modal
chatLink.addEventListener('click', (e) => {
  e.preventDefault();
  chatModal.classList.add('show');
});

chatCloseBtn.addEventListener('click', () => {
  chatModal.classList.remove('show');
});

sendBtn.addEventListener('click', sendMessage);
chatInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  const msgElem = document.createElement('div');
  msgElem.classList.add('chat-message');
  msgElem.textContent = message;
  chatBody.appendChild(msgElem);
  chatInput.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;
}
