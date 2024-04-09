document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
  
    addTaskButton.addEventListener("click", function() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement("li");
      li.innerHTML = `
        <span>${taskText}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      `;
      taskList.appendChild(li);
  
      const editButton = li.querySelector(".edit");
      const deleteButton = li.querySelector(".delete");
  
      editButton.addEventListener("click", function() {
        const newText = prompt("Edit task:", taskText);
        if (newText !== null && newText.trim() !== "") {
          taskText = newText.trim();
          li.querySelector("span").textContent = taskText;
        }
      });
  
      deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this task?")) {
          li.remove();
        }
      });
    }
  });
  