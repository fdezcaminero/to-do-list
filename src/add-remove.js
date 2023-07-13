export const tasks = [
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

export function addTask(e, inputvalue) {
  if (e.key === 'Enter') {
    const newTask = {};
    newTask['description'] = inputvalue;
    newTask['completed'] = false;
    newTask['index'] = tasks.length + 1;
    tasks.push(newTask);
  }
}

export function removeTask(removeIndex) {
  tasks.splice(removeIndex, 1);
}

// export function removeTask() {

// }

// function editTask() {

// }
