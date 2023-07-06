import _ from 'lodash';
import './style.css';

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
  for (let i=0; i<tasks.length; i++) {
    const moveFrom = i;
    const moveTo = tasks[i].index - 1;

    const objectToMove = tasks.splice(moveFrom, 1)[0];

    tasks.splice(moveTo, 0, objectToMove);
  }
}

function loadHTML() {
  const superHTML = document.querySelector('.todoList');

  sortTasks();

  for (let i=0; i<tasks.length; i++) {
    superHTML.insertAdjacentHTML("beforeend", `<li class="noBullet"><input type="checkbox">${tasks[i].description}</li>`);
  }
}

// function loadList() {

// }

window.addEventListener('load', loadHTML);
