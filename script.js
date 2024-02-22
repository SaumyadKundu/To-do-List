// Function to add a new task
function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText !== "") {
        var ul = document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML = '<span onclick="toggleTask(this)">' + taskText + '</span> <button onclick="deleteTask(this)">Delete</button>';
        ul.appendChild(li);
        input.value = "";
    }
}

// Function to toggle task completion
function toggleTask(element) {
    element.classList.toggle("completed");
}

// Function to delete a task
function deleteTask(element) {
    element.parentElement.remove();
}
