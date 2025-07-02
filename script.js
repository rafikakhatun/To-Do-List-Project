const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

const addTodo =() =>{
    const inputText = inputBox.value.trim();
    if(inputText.length <= 0){
        alert("you must write something in your to do");
        return false;
    }



    // creating li and p tag 
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

      // creating edit button

    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';
    editBtn.classList.add("Ebtn");
    li.appendChild(editBtn);

    // creating remove button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.classList.add("Dbtn");
    li.appendChild(deleteBtn);

  

    todoList.appendChild(li);
    // inputBox field empty after text added
    inputBox.value = "";





}

// update todo delete and edit

const updateTodo = (e) => {
  if (e.target.classList.contains("fa-trash")) {
    // remove the li element
    todoList.removeChild(e.target.parentElement.parentElement);
  }

  else if (e.target.classList.contains("fa-pen")) {
    const li = e.target.parentElement.parentElement;
    const p = li.querySelector("p");
    inputBox.value = p.innerText;
    todoList.removeChild(li);
    inputBox.focus();
    addBtn.value = "fa-pen";
  }


};


addBtn.addEventListener("click",addTodo);
todoList.addEventListener("click",updateTodo)