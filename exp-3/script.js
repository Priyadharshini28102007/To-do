
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
