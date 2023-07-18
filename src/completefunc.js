export default function completefunc(i, tasks) {
  document.getElementById(`task${i}`).addEventListener('blur', () => {
    document.getElementById(`experiment${i}`).classList.remove('taskInput2');
    document.getElementById(`task${i}`).classList.remove('taskInput2');
    document.getElementById(`remove${i}`).src = Icon2;
    tasks[i].description = document.getElementById(`task${i}`).value;
    localStorage.setItem('supertasks', JSON.stringify(tasks));
  });
  document.getElementById(`checkbox${i}`).addEventListener('change', () => {
    if (document.getElementById(`checkbox${i}`).checked) {
      tasks[i].completed = true;
      document.getElementById(`task${i}`).classList.add('taskLine');
    } else {
      tasks[i].completed = false;
      document.getElementById(`task${i}`).classList.remove('taskLine');
    }
    localStorage.setItem('supertasks', JSON.stringify(tasks));
  });
}
