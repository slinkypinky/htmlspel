"use strict";

const LOCAL_STORAGE_KEY_TODOS = "app.todos.advanced";

let todos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_TODOS)) || [];

let listRoot = document.querySelector("#list");
let listForm = document.querySelector("[form]");
let listInput = document.querySelector("[input]");

var origin = {
  year: 'numeric', month: 'numeric', day: 'numeric'
}

let dateOrigin = new Intl.DateTimeFormat("sv-SE", origin);

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (listInput.value.trim() === "") {
    return;
  }
  todos.push(createTodo(listInput.value.trim()));
  updateList();
  listInput.value = "";
});

function createTodo(name) {
  return {
    id: Date.now().toString(),
    name: name,
    creation: dateOrigin.format(new Date())
  };
}

function todoList(items) {
  let list = document.createElement("ul");
  items.forEach((item) => {
    let todoListItem = document.createElement("li");
    todoListItem.innerHTML += item.name;
    todoListItem.setAttribute("data-id", item.id);
    todoListItem.setAttribute("created-date", item.creation)
    todoListItem.classList.add("todo-list-item");
    todoListItem.addEventListener("click", removeItem);
    list.append(todoListItem);
    let itemDate = document.createElement("li");
    itemDate.innerHTML += item.creation;
    list.append(itemDate);
  });
  return list;
}

function removeItem(event) {
  let itemToRemove = event.target.getAttribute("data-id");
  todos = todos.filter((item) => item.id !== itemToRemove);
  updateList();
}

function updateList() {
  saveList();
  listRoot.innerHTML = "";
  listRoot.append(todoList(todos));
}

function saveList() {
  localStorage.setItem(LOCAL_STORAGE_KEY_TODOS, JSON.stringify(todos));
}

updateList();