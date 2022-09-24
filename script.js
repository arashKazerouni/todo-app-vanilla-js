const input = document.querySelector("input");
const submit = document.querySelector("button");
const todos = document.querySelector(".todos");
// Contain Any Letters Function
function containsAnyLetters(str) {
  return /[a-zA-Z]/.test(str);
}
// Save Todos to LocalStorage
const saveToLocal = (array) => {
  localStorage.setItem("todo", JSON.stringify(array));
};
let todoList = JSON.parse(localStorage.getItem("todo") || "[]");

// Add Todos to DOM Function
const addToDOM = (array) => {
  todos.innerHTML = "";
  array.forEach((todo, index) => {
    const html = `
    <div class="todo" id=${index}>
    <p class="todo-text ${todo.checkStatus ? "checked" : ""}" >${todo.name}</p>
    <i class="fa-solid fa-check"></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    `;
    todo.id = index;
    todos.insertAdjacentHTML("beforeend", html);
  });
};
// Blue Print Of Todo Declared
class Todo {
  constructor(name, id = 0, checkStatus = false) {
    this.name = name;
    this.id = id;
    this.checkStatus = checkStatus;
  }
}
// Handle Todo Submit
addToDOM(todoList);
submit.onclick = (e) => {
  e.preventDefault();
  if (!containsAnyLetters(input.value)) return;
  const newTodo = new Todo(input.value, this.id, this.checkStatus);
  todoList.push(newTodo);
  //   Add All Todos To DOM
  addToDOM(todoList);
  saveToLocal(todoList);
  input.value = "";
};
// Handle EnterPress
document.onkeypress = (e) => {
  if (e.key === "Enter") submit.click();
};
// Handle Check/Remove Items
todos.onclick = (e) => {
  const isCheck = e.target.className === "fa-solid fa-check";
  const isTrash = e.target.className === "fa-solid fa-trash";
  const parent = e.target.parentElement;
  const parentID = parseInt(parent.id);
  const currentObject = todoList[parentID];
  if (!isCheck && !isTrash) return;
  if (isCheck) currentObject.checkStatus = !currentObject.checkStatus;
  if (isTrash) todoList = todoList.filter((todo) => todo !== currentObject);
  addToDOM(todoList);
  saveToLocal(todoList);
};
