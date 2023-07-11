import _ from 'lodash';
import './style.css';
import Icon from './refresh.svg';
import Icon2 from './more_vert.svg';
import Icon3 from './enterIcon.svg';

function component() {
  const element = document.createElement('div');
  const myIcon = new Image();
  
  myIcon.src = Icon;
  myIcon.alt = "Refresh";
  myIcon.className = 'refreshIcon';

  element.appendChild(myIcon);
  return element;
}

document.getElementById('theTop').appendChild(component());

function component2() {
  const element2 = document.createElement('div');

  const vertIcon = new Image();
  
  vertIcon.src = Icon2;
  vertIcon.alt = "Vertical dots";
  vertIcon.className = 'dotsIcon';

  element2.appendChild(vertIcon);
  return element2;
}

function component3() {
  const element3 = document.createElement('div');

  const enterIcon = new Image();
  
  enterIcon.src = Icon3;
  enterIcon.alt = "Enter sign";
  enterIcon.className = 'enterIcon';

  element3.appendChild(enterIcon);
  return element3;
}

document.getElementById('newTasks').appendChild(component3());

const tasks = [
  {
    description: 'go to the supermarket',
    completed: false,
    index: 1,
  },
  {
    description: 'take out the trash',
    completed: true,
    index: 3,
  },
  {
    description: 'clean the house',
    completed: true,
    index: 2,
  },
];

function sortTasks() {
  for (let i = 0; i < tasks.length; i++) {
    const moveFrom = i;
    const moveTo = tasks[i].index - 1;

    const objectToMove = tasks.splice(moveFrom, 1)[0];

    tasks.splice(moveTo, 0, objectToMove);
  }
}

function loadHTML() {
  const superHTML = document.querySelector('.todoList');

  sortTasks();

  for (let i = 0; i < tasks.length; i++) {
    superHTML.insertAdjacentHTML("beforeend", `<section id="experiment${i}"><div><input id="checkbox${i}" type="checkbox">${tasks[i].description}</div></section>`);
    document.getElementById(`experiment${i}`).appendChild(component2());
    document.getElementById(`experiment${i}`).className = 'bottomBorder';
    document.getElementById(`checkbox${i}`).checked = tasks[i].completed;
    document.getElementById(`checkbox${i}`).addEventListener("click", switchCheck(i));
  }
}

window.addEventListener('load', loadHTML);
