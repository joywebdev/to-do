"use strict";

//Selector

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector("#filter-todo");

//Listening Event

todoBtn.addEventListener("click", (event) => {
  //Prevent from Submiting refresh
  event.preventDefault();
  //create a div for To do
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   create li
  const todoItems = document.createElement("li");
  todoItems.innerText = todoInput.value;
  todoItems.classList.add("todo-item");
  todoDiv.appendChild(todoItems);

  //   checked mark icons
  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  //delete btn icon
  //   icons
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("trash-btn");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  todoDiv.appendChild(deleteBtn);

  //Append TO list

  todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value = "";
});

todoList.addEventListener("click", (e) => {
  const items = e.target;
  if (items.classList[0] === "trash-btn") {
    const todo = items.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", () => {
      todo.remove();
    });
  }
  if (items.classList[0] === "complete-btn") {
    const todo = items.parentElement;
    todo.classList.toggle("completed");
  }
});

filterOption.addEventListener("click", filterToDo);

function filterToDo(e) {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
