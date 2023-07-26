import { addTask } from "./add-remove";

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

addTask('asdfasd', testArray);

test('Add task', () => {
  expect(testArray[testArray.length - 1]).toEqual(testObj);
});
