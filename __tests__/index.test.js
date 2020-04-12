const {_} = require('../dist/index');

test('index', () => {
  const div = _.createElement('div');
  expect(div.tagName).toBe('DIV');
});
