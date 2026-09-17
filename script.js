const API = "https://jsonplaceholder.typicode.com/users";
const container = document.getElementById("users-container");

fetch(API)
  .then(response => response.json())
  .then(users => {
    users.slice(0, 6).forEach(user => {
      const card = document.createElement("div");
      card.className = "card";
      card.id = `user-${user.id}`;
      card.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <button onclick="removeUser(${user.id})">
          Remove User
        </button>
      `;

      container.appendChild(card);
    });
  });


function removeUser(id) {
  fetch(`${API}/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.status === 200 || response.status === 204) {
        document.getElementById(`user-${id}`).remove();
      }
    });
}