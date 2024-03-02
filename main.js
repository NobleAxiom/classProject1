// Function to add a new task
function newTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");

    // Create task on new text span line 
    var taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    li.appendChild(taskSpan);

    // Create delete button
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete"; // Apply delete button style
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    // Create edit button
    var editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "edit"; // Apply edit button style
    editButton.onclick = function() {
        var newText = prompt("Edit task:", taskText);
        if (newText !== null && newText.trim() !== "") {
            taskSpan.innerText = newText;
        }
    };
    li.appendChild(editButton);

    taskList.appendChild(li);

    input.value = "";
}
