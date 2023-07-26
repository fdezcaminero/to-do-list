import { addTask, removeTask, loadHTML } from "./add-remove";

let testArray = [{
  description: 'hola mundo',
  completed: false,
  index: 1
},
{
  description: 'sup',
  completed: false,
  index: 2
},
];

let testObj = {
  description: 'asdfasd',
  completed: false,
  index: 3
}

test('Add task', () => {
  addTask('asdfasd', testArray);
  expect(testArray[testArray.length - 1]).toEqual(testObj);
});

test('Remove task', () => {
  const secondObj = testArray[1];
  removeTask(0, testArray);
  expect(testArray[0]).toEqual(secondObj);
});

test('Add task into HTML list container', () => {
  const listContainer = document.createElement('section');
  listContainer.className = 'todoList';
  let currentListLength = listContainer.querySelectorAll('.taskElement').length;
  loadHTML(listContainer, testArray);
  addTask('Run in the park');
  loadHTML(listContainer, testArray);
  expect(listContainer.querySelectotAll('.taskElement').length).toBe(currentListLength + 1);

  currentListLength = listContainer.querySelectorAll('.taskElement');
  removeTask(0, testArray);
  loadHTML(listContainer, testArray);
  expect(listContainer.querySelectorAll('.taskElement').length).toBe(currentListLength - 1);
});
