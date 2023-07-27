// import Icon2 from './more_vert.svg';
const Icon2 = '<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M479.858-160Q460-160 446-174.142q-14-14.141-14-34Q432-228 446.142-242q14.141-14 34-14Q500-256 514-241.858q14 14.141 14 34Q528-188 513.858-174q-14.141 14-34 14Zm0-272Q460-432 446-446.142q-14-14.141-14-34Q432-500 446.142-514q14.141-14 34-14Q500-528 514-513.858q14 14.141 14 34Q528-460 513.858-446q-14.141 14-34 14Zm0-272Q460-704 446-718.142q-14-14.141-14-34Q432-772 446.142-786q14.141-14 34-14Q500-800 514-785.858q14 14.141 14 34Q528-732 513.858-718q-14.141 14-34 14Z"/></svg>';
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
