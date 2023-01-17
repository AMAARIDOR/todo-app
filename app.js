"use strict";

// SELECTOR VARIABLES
const addItemButton = document.getElementById("addItemButton");

// CLICK HANDLER FOR ADD ITEM BUTTON
addItemButton.addEventListener("click", () => {
  // SELECTOR VARIABLES
  const todoListContainer = document.querySelector(".todoList");
  // USER INPUT VALUE VARIABLE
  const listItemValue = document.getElementById("addItemText").value;
  // TODO ITEM
  const todoItemHTML = `
  <div class="todoItem"><input type="checkbox" class="todoListElement"><label class="todoListElementLabel">${listItemValue}</label><button class="deleteButtons">x</button></div>
  `;
  // TODO ITEM ADDER
  todoListContainer.insertAdjacentHTML("afterbegin", todoItemHTML);
  // TODO DELETE BUTTON FUNCTIONALITY
  document.querySelector("button").addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
});
