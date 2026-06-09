let users = [];

async function getUsers() {

    const loading = document.getElementById("loading");
    const usersDiv = document.getElementById("users");

    loading.innerText = "Loading...";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        users = await response.json();

        displayUsers(users);

        loading.innerText = "";

    } catch (error) {

        loading.innerText = "";
        usersDiv.innerHTML = "<p>Failed to load users.</p>";

    }
}

function displayUsers(data) {

    const usersDiv = document.getElementById("users");

    usersDiv.innerHTML = "";

    data.forEach(user => {

        usersDiv.innerHTML += `
            <div class="user">
                <h3>${user.name}</h3>
                <p>${user.email}</p>
            </div>
        `;

    });
}

document
.getElementById("search")
.addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    displayUsers(filteredUsers);

});