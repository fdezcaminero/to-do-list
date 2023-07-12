export default function addTask(e) {
  if (e.key === 'Enter') {
    const newTask = {};
    newTask['description'] = this.value;
    newTask['completed'] = false;
    newTask['index'] = tasks.length + 1;
    tasks.push(newTask);
  }
};

// function removeTask() {

// }

// function editTask() {

// }
