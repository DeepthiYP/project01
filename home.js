// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Open/Close modal
function openGroupModal() {
  document.getElementById("groupModal").style.display = "block";
}
function closeGroupModal() {
  document.getElementById("groupModal").style.display = "none";
}

// Create a group and redirect
function createGroup() {
  const groupName = document.getElementById("groupNameInput").value.trim();
  if (groupName === "") {
    alert("Please enter a group name.");
    return;
  }

  const groupData = {
    name: groupName,
    createdAt: new Date().toISOString()
  };

  const newGroupRef = db.ref("groups").push();
  newGroupRef.set(groupData).then(() => {
    window.location.href = "groupdetail.html?id=" + newGroupRef.key;
  }).catch((error) => {
    alert("Failed to create group: " + error.message);
  });
}

// Existing create post function (unchanged)
function createPost() {
  const postInput = document.getElementById("postInput");
  const postText = postInput.value.trim();
  if (!postText) return;

  const postHtml = `
    <div class="post">
      <div class="avatar">J</div>
      <div class="post-body">
        <p class="post-meta">You • just now</p>
        <p class="post-text">${postText}</p>
        <input type="text" class="comment-input" placeholder="Write a comment..." />
      </div>
    </div>
  `;

  const container = document.getElementById("postsContainer");
  container.insertAdjacentHTML("afterbegin", postHtml);
  postInput.value = "";
}

// Schedule logic (unchanged)
document.getElementById("scheduleForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const date = document.getElementById("meetingDate").value;
  const time = document.getElementById("meetingTime").value;
  document.getElementById("confirmation").textContent = `Session scheduled for ${name} on ${date} at ${time}.`;
});

// Timetable logic (unchanged)
document.getElementById("timetableForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const day = document.getElementById("day").value;
  const slot = document.getElementById("timeSlot").value;
  const activity = document.getElementById("activity").value;

  let grid = document.getElementById("timetableGrid");
  let column = [...grid.children].find(col => col.dataset.day === day);

  if (!column) {
    column = document.createElement("div");
    column.className = "day-column";
    column.dataset.day = day;
    column.innerHTML = `<h3>${day}</h3><ul></ul>`;
    grid.appendChild(column);
  }

  const list = column.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = `${slot} - ${activity}`;
  list.appendChild(li);
});

  // Load saved avatar
  document.addEventListener("DOMContentLoaded", () => {
    const savedAvatar = localStorage.getItem("selectedAvatar");
    document.getElementById("selectedAvatar").src = savedAvatar || "https://api.dicebear.com/8.x/bottts-neutral/svg?seed=1";
  });

  // Select avatar and save to localStorage
  function selectAvatar(src) {
    document.getElementById("selectedAvatar").src = src;
    localStorage.setItem("selectedAvatar", src);
  }

