import { tasks2, sortIndex } from './index.js';

export function addTask(e, inputvalue) {
  if (e.key === 'Enter') {
    const newTask = {};
    newTask.description = inputvalue;
    newTask.completed = false;
    newTask.index = tasks2.length + 1;
    tasks2.push(newTask);
    localStorage.setItem('supertasks', JSON.stringify(tasks2));
  }
}

export function removeTask(removeIndex) {
  tasks2.splice(removeIndex, 1);
  sortIndex();
  localStorage.setItem('supertasks', JSON.stringify(tasks2));
}
