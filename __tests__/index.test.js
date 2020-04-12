const {index} = require('../dist/index');

test('index', () => {
  expect(index()).toBe('index');
});
