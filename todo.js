let todoList = [];

displayItems();

function addTodo() {
  let inputElement = document.querySelector("#input");
  let dateElement = document.querySelector("#date");
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem === "") {
    alert("Please enter a todo!");
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let listElement = document.querySelector(".lists");
  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
      <div class="item">
        <span>${item}</span>
        <span>${dueDate}</span>
        <div class="buttons">
          <button onclick="editTodo(${i})">Edit</button>
          <button onclick="deleteTodo(${i})">Delete</button>
        </div>
      </div>
    `;
  }

  // Update the DOM once after loop
  listElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}


function editTodo(index) {
  let currentTodo = todoList[index];

  
  let updatedItem = prompt("Edit your todo:", currentTodo.item);
  let updatedDate = prompt("Edit due date (YYYY-MM-DD):", currentTodo.dueDate);

  
  if (updatedItem !== null && updatedItem.trim() !== "") {
    currentTodo.item = updatedItem.trim();
  }

  if (updatedDate !== null && updatedDate.trim() !== "") {
    currentTodo.dueDate = updatedDate.trim();
  }

  displayItems();
}
