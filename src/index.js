import './style.css';
import Icon from './refresh.svg';
import Icon2 from './more_vert.svg';
import Icon3 from './enterIcon.svg';
import Icon4 from './trashcan.svg';
import { addTask, removeTask } from './add-remove.js';

let tasks = [];

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

function sortTasks() {
  for (let i = 0; i < tasks.length; i += 1) {
    const moveFrom = i;
    const moveTo = tasks[i].index - 1;
    const objectToMove = tasks.splice(moveFrom, 1)[0];
    tasks.splice(moveTo, 0, objectToMove);
  }
}

export function sortIndex() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
}

function trickypart(i) {
  document.getElementById(`task${i}`).addEventListener('blur', () => {
    document.getElementById(`experiment${i}`).classList.remove('taskInput2');
    document.getElementById(`task${i}`).classList.remove('taskInput2');
    document.getElementById(`remove${i}`).src = Icon2;
    tasks[i].description = document.getElementById(`task${i}`).value;
    localStorage.setItem('supertasks', JSON.stringify(tasks));
  });
  document.getElementById(`checkbox${i}`).addEventListener('change', () => {
    if (document.getElementById(`checkbox${i}`).checked) {
      tasks[i].completed = true;
      document.getElementById(`task${i}`).classList.add('taskLine');
    } else {
      tasks[i].completed = false;
      document.getElementById(`task${i}`).classList.remove('taskLine');
    }
    localStorage.setItem('supertasks', JSON.stringify(tasks));
  });
}

function loadHTML() {
  const superHTML = document.querySelector('.todoList');
  superHTML.innerHTML = '';
  sortTasks();
  for (let i = 0; i < tasks.length; i += 1) {
    superHTML.insertAdjacentHTML('beforeend', `<section id="experiment${i}"><input id="checkbox${i}" type="checkbox"><input id="task${i}" class="taskInput" type="text" value="${tasks[i].description}"></section>`);
    document.getElementById(`experiment${i}`).appendChild(component2(i));
    document.getElementById(`remove${i}`).addEventListener('click', () => {
      removeTask(i);
      sortTasks();
      sortIndex();
      loadHTML();
    });
    document.getElementById(`task${i}`).addEventListener('click', () => {
      document.getElementById(`experiment${i}`).classList.add('taskInput2');
      document.getElementById(`task${i}`).classList.add('taskInput2');
      document.getElementById(`remove${i}`).src = Icon4;
    });
    trickypart(i);
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
  addTask(e, this.value);
  if (e.key === 'Enter') {
    this.value = '';
  }
  loadHTML();
});

const localTasks = localStorage.getItem('supertasks');

if (localTasks) {
  tasks = JSON.parse(localTasks);
}

window.addEventListener('load', loadHTML);

export const tasks2 = tasks;
