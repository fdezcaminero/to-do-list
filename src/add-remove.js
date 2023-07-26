export function addTask(inputvalue, arrayTasks) {
  const newTask = {};
  newTask.description = inputvalue;
  newTask.completed = false;
  newTask.index = arrayTasks.length + 1;
  arrayTasks.push(newTask);
}

export function updateStorage(arrayTasks) {
  localStorage.setItem('supertasks', JSON.stringify(arrayTasks));
}

function sortIndex2(arrayTasks) {
  for (let i = 0; i < arrayTasks.length; i += 1) {
    arrayTasks[i].index = i + 1;
  }
}

export function removeTask(removeIndex, arrayTasks) {
  arrayTasks.splice(removeIndex, 1);
  sortIndex2(arrayTasks);
  localStorage.setItem('supertasks', JSON.stringify(arrayTasks));
}
