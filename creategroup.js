import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

document.addEventListener('DOMContentLoaded', async () => {
  const userList = document.getElementById('userList');
  const usersSnapshot = await getDocs(collection(db, "users"));

  usersSnapshot.forEach(doc => {
    const user = doc.data();
    const div = document.createElement('div');
    div.innerHTML = `
      <label>
        <input type="checkbox" value="${doc.id}"> ${user.name} (${user.email})
      </label>
    `;
    userList.appendChild(div);
  });
});

async function createGroup() {
  const groupName = document.getElementById('groupName').value.trim();
  if (!groupName) {
    alert('Enter group name.');
    return;
  }

  const selectedUsers = [...document.querySelectorAll('#userList input:checked')]
                        .map(input => input.value);

  if (selectedUsers.length < 1) {
    alert('Select at least one member.');
    return;
  }

  try {
    await addDoc(collection(db, "groups"), {
      name: groupName,
      members: selectedUsers,
      createdAt: new Date()
    });
    document.getElementById('status').textContent = 'Group created successfully!';
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('status').textContent = 'Error creating group.';
  }
}

function createGroup() {
  const groupName = document.getElementById('groupName').value;
  if (groupName.trim() === "") {
    alert("Please enter a group name.");
    return;
  }

  const groupRef = database.ref("groups").push();
  groupRef.set({
    name: groupName,
    createdAt: new Date().toISOString()
  }).then(() => {
    alert("Group created successfully!");
    document.getElementById('groupName').value = "";
  }).catch(error => {
    console.error("Error creating group:", error);
  });
}

window.createGroup = createGroup; // Expose to global scope if needed
