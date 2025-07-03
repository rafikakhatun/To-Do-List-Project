// Getting references to DOM elements
const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// Variable to store the task that is being edited
let editTodo = null;

// Function to add or edit a task
const addTodo = () => {
  const inputText = inputBox.value.trim();

  // Check if input is empty
  if (inputText.length <= 0) {
    alert("You must write something in your to-do");
    return;
  }

  // If we are in edit mode, update the existing task
  if (editTodo !== null) {
    editTodo.querySelector("p").innerText = inputText;
    editTodo = null;
    addBtn.value = "Add"; // Change button text back to "Add"
    inputBox.value = "";  // Clear input field
    return;
  }

  // Create new list item (li) and task paragraph (p)
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.innerHTML = inputText;
  li.appendChild(p);

  // Create Edit button with Font Awesome icon
  const editBtn = document.createElement("button");
  editBtn.innerHTML = '<i class="fas fa-pen"></i>';
  editBtn.classList.add("Ebtn");
  li.appendChild(editBtn);

  // Create Delete button with Font Awesome icon
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.classList.add("Dbtn");
  li.appendChild(deleteBtn);

  // Add the new task to the list
  todoList.appendChild(li);
  inputBox.value = ""; // Clear input field after adding

  saveLocalTodos(inputText);
};

// Function to handle delete and edit actions
const updateTodo = (e) => {
  // If delete icon is clicked
  if (e.target.classList.contains("fa-trash")) {
    const li = e.target.closest("li"); // Find the closest <li>
    todoList.removeChild(li); // Remove the task
  }

  // If edit icon is clicked
  else if (e.target.classList.contains("fa-pen")) {
    const li = e.target.closest("li");
    const p = li.querySelector("p");
    inputBox.value = p.innerText;
    inputBox.focus();
    addBtn.value = "Edit";
    editTodo = li;

  }

  // local stroage 





};

// save local todos
const saveLocalTodos = (todo) => {
  let todos;
  if(localStorage.getItem("todos") === null){
    todos = [];
  }

  else{
    todos = JSON.parse(localStorage.getItem("todos"));

  }
  
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));


  
}

// get local todos
const getLocaltodos = () => {

}

// Event listeners for add and update actions
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
