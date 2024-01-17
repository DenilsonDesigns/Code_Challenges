// *** DOM Elements ***
const inputBox = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// *** Event handlers ***
addButton.addEventListener("click", () => {
  const message = inputBox.value;

  const todo = generateTodo({ message });

  appendTodo({ todo });

  inputBox.value = "";
});

inputBox.addEventListener("input", () => {
  if (inputBox.value.length > 0) {
    addButton.disabled = false;
  } else {
    addButton.disabled = true;
  }
});

// *** Functions ***
function generateTodo({ message }) {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  h2.textContent = message;

  const button = document.createElement("button");
  button.className = "delete-button";
  button.textContent = "X";

  li.appendChild(h2);
  li.appendChild(button);

  button.addEventListener("click", () => {
    li.remove();
  });

  return li;
}

function appendTodo({ todo }) {
  todoList.appendChild(todo);
}
