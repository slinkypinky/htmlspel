"use strict";



/* 
let todos = JSON.parse(localStorage.getItem("app.message-history")) || [" a"];
let listRoot = document.querySelector("#list");
let listForm = document.querySelector("[form]");
let listInput = document.querySelector("[input]"); 

listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (listInput.value.trim() === "") {
        return;
    }
    todos.push(listInput.value.trim());
    updateList();
    listInput.value = "";
});

function todoList(items) {
    let list = document.createElement("ul");
    items.forEach((item) => {
        let todoListItem = document.createElement("li");

     /*   todoListItem.innerHTML = "<em>" + item.date + "</em> : <br>"  + item.message + "</br>";
        item.reaction.forEach((reaction) => {
            todoListItem.innerHTML += reaction;
        }); */ /*
        todoListItem.classList.add("thingtodo");
        todoListItem.addEventListener("click", removeItem);
        list.append(todoListItem);
    });
    return list;
}

function removeItem(event) {
    let itemToRemove = event.target.innerText;
    todos = todos.filter((item) => item !== itemToRemove);
    updateList();
}

function updateList() {
    saveHistory();
    let likeButton = document.createElement("button");
        likeButton.innerText = "Love!";
        likeButton.setAttribute("data-message-id", item.id);
        likeButton.addEventListener("click", (event) => {
          let targetMessage =  items.find((value) => 
              value.id === event.target.GetAttribute("data-message-id"));
              targetMessage.reactions.push(":)");
              updateList();
        });
        todoListItem.append(likeButton);
    listRoot.innerHTML = "";
    listRoot.append(todoList(todos));
}

function makeObject(message){
    let messageObject ={
    id: Date().now().toString(),
    message: message,
    date: new Date().toDateString(),
    reactions: [],
 };
 return messageObject;
}

function saveHistory() {
    localStorage.setItem("app.message-history", JSON.stringify(messageHistory));
}

function clearHistory(){
 /* localStorage.clearHistory(???) och messageHistory = todos, arrayen */
} /*

updateList();

*/


