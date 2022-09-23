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
console.log(todoList);
// Add Todos to DOM Function
const addToDOM = (array) => {
  todos.innerHTML = "";
  array.forEach((todo) => {
    const html = `
    <div class="todo" id=${todo.id}>
    <p class="todo-text" >${todo.name}</p>
    <i class="fa-solid fa-check" ></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    `;
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
  console.log(todoList);
  todoList.push(newTodo);
  //   Set current ID
  for (let i = 0; i < todoList.length; i++) newTodo.id = i;
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
