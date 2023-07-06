import _ from 'lodash';
import './style.css';
import Icon from './refresh.svg';
import Icon2 from './more_vert.svg';

function component() {
  const element = document.createElement('div');

  //  // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //  element.classList.add('hello');

  // Add the image to our existing div.

  const myIcon = new Image();
  
  myIcon.src = Icon;
  myIcon.alt = "Refresh";

  element.appendChild(myIcon);
  return element;
}

document.getElementById('theTop').appendChild(component());

function component2() {
  const element2 = document.createElement('div');

  //  // Lodash, now imported by this script
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  //  element.classList.add('hello');

  // Add the image to our existing div.

  const vertIcon = new Image();
  
  vertIcon.src = Icon2;
  vertIcon.alt = "Vertical dots";

  element2.appendChild(vertIcon);
  return element2;
}

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
    superHTML.insertAdjacentHTML("beforeend", `<li class="noBullet bottomBorder taskli"><input type="checkbox">${tasks[i].description}</li>`);
  }
}

// function loadList() {

// }

window.addEventListener('load', loadHTML);

document.getElementById('experiment1').appendChild(component2());
