const {
  $,
  TAG_NAME_DIV,
  TAG_NAME_INPUT,
  ATTR_TYPE,
  ATTR_CLASS,
  INPUT_TYPE_TEXT,
} = require('../dist/index');

test.skip('Attribute: type', () => {
  expect(
    $(TAG_NAME_INPUT)
      .attrs(ATTR_TYPE, INPUT_TYPE_TEXT)
      .dom
      .getAttribute(ATTR_TYPE)
  ).toBe(INPUT_TYPE_TEXT);
});

test.skip('Attribute: class', () => {
  expect(
    $(TAG_NAME_DIV)
      .attrs(ATTR_CLASS, 'test-class')
      .dom
      .getAttribute(ATTR_CLASS)
  ).toBe('test-class');
});
