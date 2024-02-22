
var users = [];

var currentUserNotes = [];


function toggleForms() {
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");

    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
}


function register() {
    var username = document.getElementById("registerUsername").value.trim();
    var password = document.getElementById("registerPassword").value.trim();
    var registerMessage = document.getElementById("registerMessage");

    if (username === "" || password === "") {
        registerMessage.textContent = "Please enter a username and password.";
        return;
    }

    
    if (users.some(user => user.username === username)) {
        registerMessage.textContent = "Username already exists. Please choose another.";
        return;
    }

    
    users.push({ username: username, password: password });
    registerMessage.textContent = "Registration successful!";
}


function signIn() {
    var username = document.getElementById("loginUsername").value.trim();
    var password = document.getElementById("loginPassword").value.trim();
    var loginMessage = document.getElementById("loginMessage");

    if (username === "" || password === "") {
        loginMessage.textContent = "Please enter a username and password.";
        return;
    }

    
    var user = users.find(user => user.username === username && user.password === password);
    if (user) {
        loginMessage.textContent = ""; 
        currentUser = username;
        document.getElementById("usernameSpan").textContent = username;
        document.getElementById("notesApp").style.display = "block";
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("registerForm").style.display = "none";
        displayNotes();
    } else {
        loginMessage.textContent = "Incorrect username or password.";
    }
}


function signOut() {
    currentUser = null;
    document.getElementById("notesApp").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("registerForm").style.display = "none";
}


function addNote() {
    var noteInput = document.getElementById("noteInput");
    var noteText = noteInput.value.trim();

    if (noteText !== "") {
        currentUserNotes.push(noteText);
        displayNotes();
        noteInput.value = "";
    }
}


function displayNotes() {
    var noteList = document.getElementById("noteList");
    noteList.innerHTML = "";

    currentUserNotes.forEach(function(note, index) {
        var li = document.createElement("li");
        li.className = "noteItem"; 
        li.textContent = note;
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton"; 
        deleteButton.onclick = function() {
            deleteNote(index);
        };
        li.appendChild(deleteButton);
        noteList.appendChild(li);
    });
}


function deleteNote(index) {
    currentUserNotes.splice(index, 1);
    displayNotes();
}
