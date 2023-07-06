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
    index: 2,
  },
  {
    description: 'clean the house',
    completed: true,
    index: 3,
  },
];

// function component() {
//   const element = document.createElement('div');

//   // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');

//   return element;
// }

// document.body.appendChild(component());

function loadHTML() {
  const superHTML = document.querySelector('.todoList');

  for (let i=0; i<tasks.length; i++) {
    superHTML.insertAdjacentHTML("beforeend", `<input type="checkbox">${tasks[i].description}</input>`);
  }
}

// function loadList() {

// }

window.addEventListener('load', loadHTML);
