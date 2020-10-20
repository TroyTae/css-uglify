const {
  createInput,
  ATTR_ID,
  ATTR_VALUE,
  ATTR_CLASS,
  ATTR_TYPE,
  ATTR_STYLE,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_RADIO,
  INPUT_TYPE_CHECKBOX,
} = require('../dist/index');

test('common', () => {
  const id = 'some-id';
  const value = 'some-value';
  const className = 'some-class';
  const style = 'display: none;';

  const dom = createInput()
    .attrs(
      ATTR_ID, id,
      ATTR_VALUE, value,
      ATTR_CLASS, className,
      ATTR_STYLE, style,
    )
    .dom;

  expect(dom.getAttribute(ATTR_ID)).toBe(id);
  expect(dom.getAttribute(ATTR_VALUE)).toBe(value);
  expect(dom.getAttribute(ATTR_CLASS)).toBe(className);
  expect(dom.getAttribute(ATTR_STYLE)).toBe(style);
});

test('input type', () => {
  const input = createInput();
  [
    INPUT_TYPE_TEXT,
    INPUT_TYPE_RADIO,
    INPUT_TYPE_CHECKBOX,
  ].forEach((inputType) => {
    input.attrs(ATTR_TYPE, inputType);
    expect(input.dom.getAttribute(ATTR_TYPE)).toBe(inputType);
  });
});
