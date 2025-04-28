function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

// studentgroup page
function createPost() {
  const input = document.getElementById("postInput");
  const value = input.value.trim();

  if (!value) {
    alert("Please enter something!");
    return;
  }

  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = `
    <div class="avatar">J</div>
    <div class="post-body">
      <p class="post-meta">You • Just now</p>
      <p class="post-text">${value}</p>
      <input type="text" class="comment-input" placeholder="Write a comment..." />
    </div>
  `;

  const container = document.getElementById("postsContainer");
  container.prepend(post);
  input.value = "";
}


//schedule option
// Confirmation toast
document.getElementById("scheduleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const date = document.getElementById("meetingDate").value;
  const time = document.getElementById("meetingTime").value;

  const message = `✅ ${name}, your session is scheduled for ${date} at ${time}`;
  const toast = document.getElementById("confirmation");
  toast.textContent = message;

  setTimeout(() => {
    toast.textContent = "";
  }, 5000);

  this.reset();
});

// Timetable data (with localStorage)
let timetableData = JSON.parse(localStorage.getItem("edubridgeTimetable")) || {};

document.getElementById("timetableForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const day = document.getElementById("day").value;
  const time = document.getElementById("timeSlot").value;
  const activity = document.getElementById("activity").value;

  if (!timetableData[day]) timetableData[day] = [];
  timetableData[day].push(`${time} - ${activity}`);

  localStorage.setItem("edubridgeTimetable", JSON.stringify(timetableData));
  renderTimetable();
  this.reset();
});

function renderTimetable() {
  const grid = document.getElementById("timetableGrid");
  grid.innerHTML = "";

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  days.forEach(day => {
    const column = document.createElement("div");
    column.classList.add("day-column");

    const title = document.createElement("h3");
    title.textContent = day;
    column.appendChild(title);

    const list = document.createElement("ul");
    const entries = timetableData[day] || [];
    entries.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    column.appendChild(list);
    grid.appendChild(column);
  });
}

// Initialize on load
renderTimetable();
// Sidebar
const menuToggle = document.getElementById('hamburger');
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



