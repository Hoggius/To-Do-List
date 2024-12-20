// document.addEventListener("DOMContentLoaded", setup);

const taskInput = document.getElementById("taskInput");

const addTaskButton = document.getElementById("addTaskButton");

const taskList = document.getElementById("taskList");

const highlightButton = document.getElementById("highlightTaskButton");

const li = document.createElement("Li");

// function setup() {
    // addTaskButton.onclick = handleAddTask;
//     taskList.onclick = toggleCompleted;
//     function handleAddTask() {
//         const taskText = taskInput.value.trim();
//         if (taskText !== "") {
//             const li = document.createElement("Li");
//             li.textContent = taskText;
//             taskList.appendChild(li);
//             taskInput.value = "";
//         }
//     }
//     function toggleCompleted(event) {
//         if (event.target.tagName === "LI") {
//             event.target.classList.toggle("completed");
//         }
//     }
// }






addTaskButton.onclick = addTask;
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        li.className = "task";
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

taskList.onclick = toggleCompleted;
function toggleCompleted(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("completed");
    }
}


highlightButton.onclick = hightlightTasks;
function hightlightTasks () {
    if (li.style.backgroundColor !== "yellow") {
        li.style.backgroundColor = "yellow";
    } else {
        li.style.backgroundColor = "transparent"
    }
}

// function removeCompletedTasks () {
//     const completed = document.getElementsByClassName("completed")
//     completed.remove();
// }

