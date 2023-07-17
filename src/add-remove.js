import { tasks, sortIndex } from './index.js';

export function addTask(e, inputvalue) {
  if (e.key === 'Enter') {
    const newTask = {};
    newTask.description = inputvalue;
    newTask.completed = false;
    newTask.index = tasks.length + 1;
    tasks.push(newTask);
    localStorage.setItem('supertasks', JSON.stringify(tasks));
  }
}

export function removeTask(removeIndex) {
  tasks.splice(removeIndex, 1);
  sortIndex();
  localStorage.setItem('supertasks', JSON.stringify(tasks));
}
