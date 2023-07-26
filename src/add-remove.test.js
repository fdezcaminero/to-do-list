import { addTask, removeTask } from "./add-remove";

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
