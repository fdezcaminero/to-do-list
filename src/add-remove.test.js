const { addTask, removeTask } = require('./add-remove');

let testArray = [{
  description: 'hola mundo',
},
{
  description: 'sup',
},
];

test('addTask, ', () => {
  expect(addTask('asdfasd', testArray)).toEqual(3);
});
