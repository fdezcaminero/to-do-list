import './style.css';
import Icon from './refresh.svg';
import Icon2 from './more_vert.svg';
import Icon3 from './enterIcon.svg';
import Icon4 from './trashcan.svg';
import { addTask, removeTask } from './add-remove.js';
import completefunc from './completefunc.js';

let tasks = [];

const localTasks = localStorage.getItem('supertasks');

if (localTasks) {
  tasks = JSON.parse(localTasks);
}

function component() {
  const element = document.createElement('div');
  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.alt = 'Refresh';
  myIcon.className = 'refreshIcon';
  element.appendChild(myIcon);
  return element;
}

document.getElementById('theTop').appendChild(component());

function component2(index) {
  const element2 = document.createElement('div');
  const vertIcon = new Image();
  vertIcon.src = Icon2;
  vertIcon.alt = 'Vertical dots';
  vertIcon.className = 'dotsIcon';
  vertIcon.id = `remove${index}`;
  element2.appendChild(vertIcon);
  return element2;
}

function component3() {
  const element3 = document.createElement('div');
  const enterIcon = new Image();
  enterIcon.src = Icon3;
  enterIcon.alt = 'Enter sign';
  enterIcon.className = 'enterIcon';
  element3.appendChild(enterIcon);
  return element3;
}

document.getElementById('newTasks').appendChild(component3());

function sortIndex() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
}

function callRemove(i) {
  removeTask(i, tasks);
}

function loadHTML() {
  const superHTML = document.querySelector('.todoList');
  superHTML.innerHTML = '';
  for (let i = 0; i < tasks.length; i += 1) {
    superHTML.insertAdjacentHTML('beforeend', `<section id="experiment${i}"><input id="checkbox${i}" type="checkbox"><input id="task${i}" class="taskInput" type="text" value="${tasks[i].description}"></section>`);
    document.getElementById(`experiment${i}`).appendChild(component2(i));
    document.getElementById(`remove${i}`).addEventListener('click', () => {
      callRemove(i);
      sortIndex();
      loadHTML();
    });
    document.getElementById(`task${i}`).addEventListener('click', () => {
      document.getElementById(`experiment${i}`).classList.add('taskInput2');
      document.getElementById(`task${i}`).classList.add('taskInput2');
      document.getElementById(`remove${i}`).src = Icon4;
    });
    completefunc(i, tasks);
    document.getElementById(`experiment${i}`).className = 'bottomBorder';
    document.getElementById(`checkbox${i}`).checked = tasks[i].completed;
    if (document.getElementById(`checkbox${i}`).checked) {
      document.getElementById(`task${i}`).classList.add('taskLine');
    } else {
      tasks[i].completed = false;
    }
  }
}

document.getElementById('inputAdd').addEventListener('keypress', function addfunction(e) {
  if (e.key === 'Enter') {
    addTask(this.value, tasks);
    this.value = '';
  }
  loadHTML();
});

function checkCompleted(notCompleted) {
  return notCompleted.completed === false;
}

document.getElementById('clearButton').addEventListener('click', () => {
  tasks = tasks.filter(checkCompleted);
  loadHTML();
  localStorage.setItem('supertasks', JSON.stringify(tasks));
});

window.addEventListener('load', loadHTML);
