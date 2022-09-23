const input = document.querySelector("input");
const submit = document.querySelector("button");
const todos = document.querySelector(".todos");
let todoList = [];
// Contain Any Letters Function
function containsAnyLetters(str) {
  return /[a-zA-Z]/.test(str);
}

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

submit.onclick = (e) => {
  e.preventDefault();
  if (!containsAnyLetters(input.value)) return;
  const newTodo = new Todo(input.value, this.id, this.checkStatus);
  todoList.push(newTodo);
  //   Set current ID
  for (let i = 0; i < todoList.length; i++) newTodo.id = i;
  //   Add All Todos To DOM
  addToDOM(todoList);
  input.value = "";
};
// Handle EnterPress
document.onkeypress = (e) => {
  if (e.key === "Enter") submit.click();
};

// Handle Check/Remove Items
todos.onclick = (e) => {
  e.preventDefault();
  // Specify Current Element And Buttons
  const isCheck = e.target.classList.contains("fa-check");
  const isTrash = e.target.classList.contains("fa-trash");
  const elementText = e.target.previousElementSibling;
  const parentElement = e.target.parentElement;
  const parentElementID = parseInt(parentElement.id);
  let currentObject = todoList[parentElementID];
  ///////////////////////////////////////
  ///////////////////////////////////////
  if (!isCheck && !isTrash) return;
  //   Handle Check Todos
  if (isCheck) currentObject.checkStatus = !currentObject.checkStatus;
  //   addToDOM(todoList);
  if (currentObject.checkStatus) {
    elementText.classList.add("checked");
  } else {
    elementText.classList.remove("checked");
  }
};
