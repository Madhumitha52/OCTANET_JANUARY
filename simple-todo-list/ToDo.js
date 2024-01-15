const form = document.querySelector('#todoForm');
const list = document.querySelector('#list');
const refresh = document.querySelector('.refresh'); // Corrected variable name

const generateTodoTemplate = (todo, id) => {
  return `<li class="d-flex justify-content-between" id="${id}">
  <div class="todoItself">
  <i class="unDone far fa-circle"></i>
  ${todo}
  </div>
  <div>
  <i class="delete fas fa-trash"></i>
  </div>
  </li>`;
};

const addTodo = (todoTemplate) => {
  list.innerHTML += todoTemplate;
};

// Add todo
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todo = e.target.todo.value.trim();
  if(todo === ""){
    alert("You have to enter a task first :)");
  } else {
    addTodo(generateTodoTemplate(todo, Math.random()));
    if(list.style.borderTop === ""){
      list.style.borderTop = "2px solid white";
    }
    // Reset form
    form.reset();
  }
});

// Delete todo
list.addEventListener('click', (e) => {
  if (e.target.className.includes('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});

// Complete todo
list.addEventListener('click', (e) => {
  if (e.target.className.includes('unDone')) {
    e.target.parentElement.className = 'todoItself todoLine';
    e.target.className = 'completed fas fa-check-circle';
  } else if (e.target.className.includes('completed')) {
    e.target.parentElement.className = 'todoItself';
    e.target.className = 'unDone far fa-circle';
  }
});

// Refresh list
refresh.addEventListener('click', () => {
  list.innerHTML = '';
  if(list.style.borderTop === "2px solid white"){
    list.style.borderTop = "";
  }
});
