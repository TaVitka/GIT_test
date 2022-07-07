let tasksForm = document.getElementById('tasks-form');
let taskInput = document.getElementById('task-add');
let taskButton = document.getElementById('task-btn');
let tasksList = document.getElementById('todoList');

taskButton.addEventListener('click', newTask);
tasksList.addEventListener('click', deleteTask);

function newTask(event) {
  if (taskInput.value === '' || taskInput.value === ' ') {
    alert('You must to fill in your new task before adding')
  }
  else {
    event.preventDefault();
    let newTask = document.createElement('li');
    let taskCompleteButton = document.createElement('button');
    let newTaskText = document.createElement('p');
    let taskDeleteButton = document.createElement('button');
    
    
    newTask.classList.add('todo__item');
    taskCompleteButton.classList.add('todo__checked');
    newTaskText.classList.add('todo__item-text');
    taskDeleteButton.classList.add('todo__delete')
    
    newTask.appendChild(taskCompleteButton);
    newTask.appendChild(newTaskText);
    newTask.appendChild(taskDeleteButton);
    tasksList.appendChild(newTask);
    
    newTaskText.innerText = taskInput.value;
    taskInput.value = '';
  }
}


function deleteTask(event) {
  let removerBtn = document.getElementsByClassName('todo__delete');
  let singleTask = document.getElementsByClassName('todo__item');
  
  for (i = 0; i < removerBtn.length; i++) {
    removerBtn[i].onclick = function removeTaskEl() {
    let taskEl = this.parentElement;
    taskEl.remove();
  }
};

for (i = 0; i < singleTask.length; i++) {
  singleTask[i].onclick = function checkedTaskEl() {
   this.classList.toggle('todo__item--checked');
  }
};
};