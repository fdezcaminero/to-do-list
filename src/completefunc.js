// import Icon2 from './more_vert.svg';
import { updateStorage } from './add-remove';

export function editTask(i, listContainer, tasks) {
  listContainer.querySelector(`#experiment${i}`).classList.remove('taskInput2');
  listContainer.querySelector(`#task${i}`).classList.remove('taskInput2');
  tasks[i].description = listContainer.querySelector(`#task${i}`).value;
}

export function checkboxHandler(i, listContainer, tasks) {
  if (listContainer.querySelector(`#checkbox${i}`).checked) {
    tasks[i].completed = true;
    listContainer.querySelector(`#task${i}`).classList.add('taskLine');
  } else {
    tasks[i].completed = false;
    listContainer.querySelector(`#task${i}`).classList.remove('taskLine');
  }
}

export default function completefunc(i, tasks) {
  document.getElementById(`task${i}`).addEventListener('blur', () => {
    const listContainer = document.querySelector('.todoList');
    editTask(i, listContainer, tasks);
    listContainer.querySelector(`#remove${i}`).src = Icon2;
    updateStorage(tasks);
  });
  document.getElementById(`checkbox${i}`).addEventListener('change', () => {
    const listContainer = document.querySelector('.todoList');
    checkboxHandler(i, listContainer, tasks);
    updateStorage(tasks);
  });
}
