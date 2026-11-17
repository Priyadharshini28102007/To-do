# Ex03 To-Do List using JavaScript
## Date: 17.11.26

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
```
index.html

<!DOCTYPE html>
<html>
<head>
    <title>My Daily Planner</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1> My Daily Planner </h1>
        <p>Organize your day, achieve your goals!</p>

        <div class="input-box">
            <input type="text" id="taskInput"
                   placeholder="Enter your task">
            <button onclick="addTask()">Add Task</button>
        </div>

        <h3>My Tasks</h3>
        <ul id="taskList"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>

style.css

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(120deg, #a1c4fd, #c2e9fb);
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

.container {
    background: white;
    width: 400px;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 15px gray;
}

h1 {
    color: #345995;
}

.input-box {
    display: flex;
    gap: 8px;
}

input {
    flex: 1;
    padding: 12px;
    border: 1px solid gray;
    border-radius: 5px;
}

button {
    background: #345995;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
}

ul {
    padding: 0;
}

li {
    list-style: none;
    background: #eef4ff;
    padding: 12px;
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    gap: 8px;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

.delete {
    background: #e63946;
}

.edit {
    background: #2a9d8f;
}

script.js

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) {
            span.classList.add("completed");
        }

        span.onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        };

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "edit";
        editBtn.onclick = () => editTask(index);

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete";
        deleteBtn.onclick = () => deleteTask(index);

        li.append(span, editBtn, deleteBtn);
        list.appendChild(li);
    });
}

function addTask() {
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({ text: text, completed: false });
    input.value = "";

    saveTasks();
    displayTasks();
}

function editTask(index) {
    let updated = prompt("Edit your task:", tasks[index].text);

    if (updated !== null && updated.trim() !== "") {
        tasks[index].text = updated.trim();
        saveTasks();
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    displayTasks();
}

displayTasks();

```

## OUTPUT
![alt text](<Screenshot 2026-11-17 182821.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
