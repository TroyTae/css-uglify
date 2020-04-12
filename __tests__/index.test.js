const {
  _,
  setAttributes,
} = require('../dist/index');

test('setAttributes', () => {
  const element = setAttributes(
    _.createElement('div'),
    {
      'class': 'test',
      'data-animation': 'fade',
    },
  );
  expect(element.className).toBe('test');
  expect(element.getAttribute('class')).toBe('test');
  expect(element.getAttribute('data-animation')).toBe('fade');
  expect(element.getAttribute('test')).toBe(null);
});
