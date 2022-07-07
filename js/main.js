// window.addEventListener('load', ()=> {
//   let form = document.querySelector('#tasks-form');
//   let input = document.querySelector('#form-add');
//   let list = document.querySelector('todoList');
//   console.log(form);
// })


// let closeEl = document.getElementsByClassName('Layer_2');
// let taskItem = document.querySelector('.todo__item');
// let taskItemContent = document.querySelector('.todo__item-text');

// for (let i = 0; i < closeEl.length; i++) {
//   closeEl[i].onclick = function deleteTask() {
//     taskItem = this.parentElement;
//     taskItem.style.display = 'none';
//   }
// };


// const addClass = (ell) => {
// ell.classList.toggle('todo__item--checked')
// }



const tasksForm = document.getElementById('tasks-form');
let taskInput = document.getElementById('task-add');
const taskButton = document.getElementById('task-btn');
const tasksList = document.getElementById('todoList');

taskButton.addEventListener('click', newTask);
tasksList.addEventListener('click', deleteTask);




function newTask(event) {
  if (taskInput.value === '' || taskInput.value === ' ') {
    alert('You must to fill in your new task before adding')
  }
  else {
    event.preventDefault();
    let newTask = document.createElement('li');
    newTask.classList.add('todo__item');
  
    let taskCompleteButton = document.createElement('div');
    taskCompleteButton.classList.add('todo__checked');
    newTask.appendChild(taskCompleteButton);
  
    let newTaskText = document.createElement('p');
    newTaskText.innerText = taskInput.value;
    newTaskText.classList.add('todo__item-text');
    newTask.appendChild(newTaskText);

    let taskDeleteButton = document.createElement('div');
    taskDeleteButton.classList.add('todo__delete')
    newTask.appendChild(taskDeleteButton);

    tasksList.appendChild(newTask);

    taskInput.value = '';
  }
}





























// function newTask(event) {
//   event.preventDefault();
//   let newTask = document.createElement('li');
//   newTask.classList.add('todo__item');
  
//   let taskCompleteButton = document.createElement('div');
//   taskCompleteButton.innerHTML = '<svg version="1.1" class="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.881px" height="89.842px" viewBox="0 0 122.881 89.842"enable-background="new 0 0 122.881 89.842" xml:space="preserve"><g><pathd="M1.232,55.541c-1.533-1.388-1.652-3.756-0.265-5.289c1.388-1.534,3.756-1.652,5.29-0.265l34.053,30.878l76.099-79.699 c1.429-1.501,3.804-1.561,5.305-0.132c1.502,1.428,1.561,3.803,0.133,5.305L43.223,88.683l-0.005-0.005 c-1.396,1.468-3.716,1.563-5.227,0.196L1.232,55.541L1.232,55.541z" /></g></svg>';
//   newTask.appendChild(taskCompleteButton);
  
//   let newTaskText = document.createElement('p');
//   newTaskText.innerText = taskInput.value;
//   newTaskText.classList.add('todo__item-text');
//   newTask.appendChild(newTaskText);

//   let taskDeleteButton = document.createElement('div');
//   taskDeleteButton.innerHTML = '<svg version="1.1" class="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.878px" height="122.88px" viewBox="0 0 122.878 122.88" enable-background="new 0 0 122.878 122.88" xml:space="preserve"> <g> <path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z"/></g></svg>';
//   newTask.appendChild(taskDeleteButton);

//   tasksList.appendChild(newTask);

//   taskInput.value = '';
// }


function deleteTask(event) {
  alert('You got it!');
}
