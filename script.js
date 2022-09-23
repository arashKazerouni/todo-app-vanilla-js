const input = document.querySelector("input");
const submit = document.querySelector("button");
const todos = document.querySelector(".todos");
let todoList = [];
// Contain Any Letters Function
function containsAnyLetters(str) {
  return /[a-zA-Z]/.test(str);
}

// Add Todos to DOM Function
const addToDOM = (todo) => {
  const html = `
    <div class="todo" id=${todo.id}>
    <p class="todo-text" >${todo.name}</p>
    <i class="fa-solid fa-check" ></i>
    <i class="fa-solid fa-trash"></i>
    </div>
    `;
  todos.insertAdjacentHTML("beforeend", html);
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
  todos.innerHTML = "";
  input.value.split("");
  //   if (input.value === "") return;
  const newTodo = new Todo(input.value, this.id, this.checkStatus);
  todoList.push(newTodo);
  //   Set current ID
  for (let i = 0; i < todoList.length; i++) newTodo.id = i;
  //   Add All Todos To DOM
  todoList.forEach((todo) => {
    addToDOM(todo);
  });
  input.value = "";
};
// Handle EnterPress
document.onkeypress = (e) => {
  if (e.key === "Enter") submit.click();
};

// Handle Check/Remove Items
todos.onclick = (e) => {
  // Specify elements and buttons in each todo
  const isCheck = e.target.classList.contains("fa-check");
  const isTrash = e.target.classList.contains("fa-trash");
  const elementText = e.target.previousElementSibling;
  const element = e.target.parentElement;
  const elementID = parseInt(element.id);
  ///////////////////////////////////////
  ///////////////////////////////////////
  if (!isCheck && !isTrash) return;
  //   Handle Check Todos
  if (isCheck) elementText.classList.toggle("checked");
  if (elementText.classList.contains("checked")) {
    todoList[elementID].checkStatus = true;
  } else {
    todoList[elementID].checkStatus = false;
  }
  //   If Click on TrashBtn
};
