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

    // creating remove button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Remove";
    li.appendChild(deleteBtn);

    // creating edit button

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    li.appendChild(editBtn);

    todoList.appendChild(li);
    // inputBox field empty after text added
    inputBox.value = "";





}

addBtn.addEventListener("click",addTodo)