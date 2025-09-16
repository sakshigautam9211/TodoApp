let todoList = [
  { item: 'Buy Milk', dueDate: '4/10/2023' },
  { item: 'Go to College', dueDate: '4/10/2023' }
];

displayItems();

function addTodo() {
  let inputElement = document.querySelector('#input');
  let dateElement = document.querySelector('#date');
  let todoItem = inputElement.value.trim();
  let todoDate = dateElement.value;

  if (todoItem === '') {
    alert("Please enter a todo!");
    return;
  }

  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = '';
  dateElement.value = '';
  displayItems();
}

function displayItems() {
  let listElement = document.querySelector('.lists');
  let newHtml = '';

  for (let i = 0; i < todoList.length; i++) {
    let { item, dueDate } = todoList[i];

    newHtml += `
      <div class="item">
        <span>${item}</span>
        <span>${dueDate}</span>
        <div class="buttons">
          <button onclick="deleteTodo(${i})">Delete</button>
        </div>
      </div>
    `;
  }

  // Update once after loop finishes
  listElement.innerHTML = newHtml;
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  displayItems();
}

