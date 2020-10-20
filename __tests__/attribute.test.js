const {
  createInput,
  ATTR_ID,
  ATTR_VALUE,
  ATTR_CLASS,
  ATTR_TYPE,
  ATTR_STYLE,
} = require('../dist/index');

test('attribute', () => {
  const id = 'some-id';
  const value = 'some-value';
  const className = 'some-class';
  const dom = createInput()
    .attrs(
      ATTR_ID, id,
      ATTR_VALUE, value,
      ATTR_CLASS, className,
      ATTR_TYPE, 'button',
      ATTR_STYLE, 'display: none;',
    )
    .dom;

  expect(dom.getAttribute(ATTR_ID)).toBe(id);
  expect(dom.getAttribute(ATTR_VALUE)).toBe(value);
  expect(dom.getAttribute(ATTR_CLASS)).toBe(className);
  expect(dom.type).toBe('button');
  expect(dom.style.display).toBe('none');
});
