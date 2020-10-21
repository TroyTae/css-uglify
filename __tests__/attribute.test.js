const {
  $,
  TAG_NAME_INPUT,
  ATTR_ID,
  ATTR_VALUE,
  ATTR_CLASS,
  ATTR_TYPE,
  ATTR_STYLE,
} = require('../dist/index');

test('id/class', () => {
  const id = 'some-id';
  const className = 'some-class';
  const dom = $(TAG_NAME_INPUT)
    .attrs(
      ATTR_ID, id,
      ATTR_CLASS, className,
    )
    .dom;
  expect(dom.getAttribute(ATTR_ID)).toBe(id);
  expect(dom.getAttribute(ATTR_CLASS)).toBe(className);
});

test('value', () => {
  const value = 'some-value';
  const dom = $(TAG_NAME_INPUT)
    .attrs(ATTR_VALUE, value)
    .dom;
  expect(dom.getAttribute(ATTR_VALUE)).toBe(value);
});

test('type', () => {
  const dom = $(TAG_NAME_INPUT)
    .attrs(ATTR_TYPE, 'button')
    .dom;
  expect(dom.type).toBe('button');
});

test('style', () => {
  const dom = $(TAG_NAME_INPUT)
    .attrs(ATTR_STYLE, 'display: none;')
    .dom;
  expect(dom.style.display).toBe('none');
});
