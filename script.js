const input = document.querySelector("input");
const submit = document.querySelector("button");
const todos = document.querySelector(".todos");
let todoList = [];
// Contain Any Letters Function
function containsAnyLetters(str) {
  return /[a-zA-Z]/.test(str);
}
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
  input.value.split("");
  //   if (input.value === "") return;
  const newTodo = new Todo(input.value, this.id, this.checkStatus);
  todoList.push(newTodo);
  //   Set current ID
  for (let i = 0; i < todoList.length; i++) {
    newTodo.id = i;
  }
    console.log(todoList);
  input.value = "";
};
// Handle EnterPress
document.onkeypress = (e) => {
  if (e.key === "Enter") submit.click();
};
