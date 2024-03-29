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
}

export function loadHTML(listContainer, listArray) {
  listContainer.innerHTML = '';
  for (let i = 0; i < listArray.length; i += 1) {
    const listElement = document.createElement('section');
    listElement.className = 'taskElement';
    listElement.id = `experiment${i}`;
    listElement.innerHTML = `<input id="checkbox${i}" type="checkbox"><input id="task${i}" class="taskInput" type="text" value="${listArray[i].description}">`;
    listContainer.appendChild(listElement);
  }
}

export function checkCompleted(notCompleted) {
  return notCompleted.completed === false;
}

export function clearAll(listArray) {
  listArray = listArray.filter(checkCompleted);
  return listArray;
}

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
