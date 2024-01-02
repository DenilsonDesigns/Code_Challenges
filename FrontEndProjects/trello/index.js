/// *** DOM ELEMENTS ***
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close");
const todoList = document.getElementById("todo-cards");
// const inProgressList = document.getElementById("in-progress-cards");
// const doneList = document.getElementById("done-cards");

// *** EVENT LISTENERS ***

// CREATE CARD LISTENER:
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const card = createCard(taskText);
    todoList.appendChild(card);
    taskInput.value = "";
  }
});

// DRAG N DROP LISTENER.
document.querySelectorAll(".list").forEach(function (list) {
  list.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  list.addEventListener("drop", function (e) {
    e.preventDefault();
    const taskText = e.dataTransfer.getData("text/plain");
    const card = createCard(taskText);
    list.querySelector(".cards").appendChild(card);
  });
});

// CANCEL BUTTON TO DISMISS MODAL
closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// ON BLUR CLICK TO DISMISS MODAL
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

/// *** Functions ***
function createCard(taskText) {
  const card = document.createElement("div");
  card.className = "card";
  card.textContent = taskText;
  card.draggable = true;

  card.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", taskText);
    setTimeout(() => {
      card.style.display = "none";
    }, 0);
  });

  card.addEventListener("dragend", function () {
    card.style.display = "block";
  });

  return card;
}

// @TODO LIST:
// ADD `ADD` BUTTON TO DYNAMICALLY BRING UP MODAL.
// STOP THE ADD MODAL FROM BEING VISIBLE ON LOAD.
// WHEN TASKS ARE DRAGGED, SHOULD NOT PERSIST IN THE PREVIOUS COLUMN
