import './style.css';
import Icon from './refresh.svg';
import Icon2 from './more_vert.svg';
import Icon3 from './enterIcon.svg';
import Icon4 from './trashcan.svg';
import { tasks, addTask, removeTask } from './add-remove.js';

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

function sortIndex() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
}

function loadHTML() {
  const superHTML = document.querySelector('.todoList');
  superHTML.innerHTML = ``;
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
    document.getElementById(`experiment${i}`).className = 'bottomBorder';
    document.getElementById(`checkbox${i}`).checked = tasks[i].completed;
  }
}

document.getElementById('inputAdd').addEventListener('keypress', function (e) {
  addTask(e, this.value);
  loadHTML();
});

window.addEventListener('load', loadHTML);
