const {
  $,
  TAG_NAME_DIV,
  TAG_NAME_INPUT,
  ATTR_VALUE,
  ATTR_CLASS,
} = require('../dist/index');

test('Attribute: value', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_VALUE, 'test-value')
      .dom
      .getAttribute(ATTR_VALUE)
  ).toBe('test-value');
});

test('Attribute: class', () => {
  expect(
    $(TAG_NAME_DIV)
      .setAttributes(ATTR_CLASS, 'test-class')
      .dom
      .getAttribute(ATTR_CLASS)
  ).toBe('test-class');
});
