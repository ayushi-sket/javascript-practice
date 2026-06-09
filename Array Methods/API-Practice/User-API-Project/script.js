let users = [];

// Load users from API
async function getUsers() {

    const loading = document.getElementById("loading");
    const usersDiv = document.getElementById("users");

    // show loading
    loading.innerText = "Loading...";
    usersDiv.innerHTML = "";

    // ⭐ IMPORTANT: force UI to render loading text
    await new Promise(resolve => setTimeout(resolve, 50));

    try {

        // fetch API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        users = await response.json();

        // hide loading
        loading.innerText = "";

        // show users
        displayUsers(users);

    } catch (error) {

        loading.innerText = "";
        usersDiv.innerHTML = "<p>Failed to load users.</p>";

    }
}


// Display users in UI
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


// Search functionality
document.getElementById("search").addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(value)
    );

    displayUsers(filteredUsers);

});