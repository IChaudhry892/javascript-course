// const todoList = [{
//   name: 'make dinner', 
//   dueDate: '2022-12-12'
// }, { 
//   name: 'wash dishes',
//   dueDate: '2022-12-12'
// }];
const todoList = JSON.parse(localStorage.getItem('todo-list')) || [{
  name: 'make dinner', 
  dueDate: '2022-12-12'
}, { 
  name: 'wash dishes',
  dueDate: '2022-12-12'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();

        saveToStorage();
        console.log(todoList);
      ">Delete</button>
    `; //generating the HTML
    todoListHTML += html;
  }


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();

  saveToStorage();
  console.log(todoList);
}

function saveToStorage(){
  localStorage.setItem('todo-list', JSON.stringify(todoList));
}