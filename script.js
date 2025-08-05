document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");
  listItem.className = "task";

  listItem.innerHTML = `
    <span class="task-text">${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  listItem.querySelector(".task-text").addEventListener("click", function () {
    listItem.classList.toggle("completed");
  });

  listItem.querySelector(".delete-btn").addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

  taskList.appendChild(listItem);
  taskInput.value = "";
});