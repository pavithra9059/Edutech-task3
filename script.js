<script>

let users = [
{
    id:1,
    name:"Pavithra"
},
{
    id:2,
    name:"Krishna"
},
{
    id:3,
    name:"Akhil"
}
];

function renderUsers(userList = users){

    const userGrid =
    document.getElementById("userGrid");

    userGrid.innerHTML = "";

    if(userList.length === 0){

        userGrid.innerHTML = `
        <div class="empty">
            No Users Found
        </div>
        `;

        document.getElementById(
        "userCount").textContent = 0;

        return;
    }

    userList.forEach(user=>{

        const firstLetter =
        user.name.charAt(0).toUpperCase();

        userGrid.innerHTML += `
        <div class="user-card">

            <div class="avatar">
                ${firstLetter}
            </div>

            <div class="name">
                ${user.name}
            </div>

            <div class="actions">

                <button
                class="edit-btn"
                onclick="editUser(${user.id})">
                ✏ Edit
                </button>

                <button
                class="delete-btn"
                onclick="deleteUser(${user.id})">
                🗑 Delete
                </button>

            </div>

        </div>
        `;
    });

    document.getElementById(
    "userCount").textContent =
    users.length;
}

function addUser(){

    const input =
    document.getElementById(
    "userInput");

    const name =
    input.value.trim();

    if(name === ""){

        alert(
        "Please enter a user name"
        );

        return;
    }

    users.push({
        id:Date.now(),
        name:name
    });

    input.value = "";

    renderUsers();
}

function editUser(id){

    const user =
    users.find(
    user => user.id === id
    );

    const newName =
    prompt(
    "Edit User Name",
    user.name
    );

    if(
        newName &&
        newName.trim() !== ""
    ){

        user.name =
        newName.trim();

        renderUsers();
    }
}

function deleteUser(id){

    const confirmDelete =
    confirm(
    "Delete this user?"
    );

    if(confirmDelete){

        users =
        users.filter(
        user => user.id !== id
        );

        renderUsers();
    }
}

function searchUsers(){

    const searchValue =
    document.getElementById(
    "searchInput"
    ).value.toLowerCase();

    const filteredUsers =
    users.filter(user =>
    user.name
    .toLowerCase()
    .includes(searchValue)
    );

    renderUsers(filteredUsers);
}

renderUsers();

</script>

</body>
</html>
