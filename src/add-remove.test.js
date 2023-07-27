import { addTask, removeTask, loadHTML } from './add-remove.js';

const testArray = [{
  description: 'hola mundo',
  completed: false,
  index: 1,
},
{
  description: 'sup',
  completed: false,
  index: 2,
},
];

const testObj = {
  description: 'asdfasd',
  completed: false,
  index: 3,
};

describe('Add and remove tasks', () => {
  test('Add task', () => {
    addTask('asdfasd', testArray);
    expect(testArray[testArray.length - 1]).toEqual(testObj);
  });

  test('Remove task', () => {
    const secondObj = testArray[1];
    removeTask(0, testArray);
    expect(testArray[0]).toEqual(secondObj);
  });
});

describe('Make sure HTML is being added and removed', () => {
  test('Add/remove task into HTML list container', () => {
    const listContainer = document.createElement('section');
    listContainer.className = 'todoList';
    loadHTML(listContainer, testArray);
    let currentListLength = listContainer.getElementsByClassName('taskElement').length;
    addTask('Run in the park', testArray);
    loadHTML(listContainer, testArray);
    expect(listContainer.getElementsByClassName('taskElement').length).toBe(currentListLength + 1);

    currentListLength = listContainer.getElementsByClassName('taskElement').length;
    removeTask(0, testArray);
    loadHTML(listContainer, testArray);
    expect(listContainer.getElementsByClassName('taskElement').length).toBe(currentListLength - 1);
  });
});
