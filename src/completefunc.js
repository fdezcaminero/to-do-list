import Icon2 from './more_vert.svg';
import { updateStorage, editTask, checkboxHandler } from './add-remove.js';

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
