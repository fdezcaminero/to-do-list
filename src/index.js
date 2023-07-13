import './style.css';
import Icon from './refresh.svg';
import Icon2 from './more_vert.svg';
import Icon3 from './enterIcon.svg';
import { tasks, addTask } from './add-remove.js';

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

function component2() {
  const element2 = document.createElement('div');
  const vertIcon = new Image();
  vertIcon.src = Icon2;
  vertIcon.alt = 'Vertical dots';
  vertIcon.className = 'dotsIcon';
  element2.appendChild(vertIcon);
  // element2.addEventListener('click', removeTask(index));
  return element2;
}

// function removeTask(index) {
//   tasks.splice(index, 1);
//   loadHTML();
// }

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

function loadHTML() {
  const superHTML = document.querySelector('.todoList');
  superHTML.innerHTML = ``;
  sortTasks();
  for (let i = 0; i < tasks.length; i += 1) {
    superHTML.insertAdjacentHTML('beforeend', `<section id="experiment${i}"><input id="checkbox${i}" type="checkbox"><input class="taskInput" type="text" value="${tasks[i].description}"></section>`);
    document.getElementById(`experiment${i}`).appendChild(component2());
    document.getElementById(`experiment${i}`).className = 'bottomBorder';
    document.getElementById(`checkbox${i}`).checked = tasks[i].completed;
  }
}

document.getElementById('inputAdd').addEventListener('keypress', function (e) {
  addTask(e, this.value);
  loadHTML();
});

window.addEventListener('load', loadHTML);
