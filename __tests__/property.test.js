const {
  createInput,
  PROP_ID,
  PROP_TYPE,
  PROP_CLASS,
  PROP_VALUE,
  PROP_CHECKED,
  PROP_DISABLED,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_RADIO,
  INPUT_TYPE_CHECKBOX,
} = require('../dist/index');

test('common', () => {
  const id = 'some-id';
  const className = 'some-class';
  const dom = createInput()
    .props(
      PROP_ID, id,
      PROP_CLASS, className,
    )
    .dom;
  expect(dom.id).toBe(id);
  expect(dom.className).toBe(className);
});

test('value', () => {
  const value = 'some-value';
  const input = createInput()
    .props(
      PROP_TYPE, INPUT_TYPE_TEXT,
      PROP_VALUE, value,
    );
  expect(input.dom.value).toBe(value);
});

test('checked', () => {
  const input = createInput()
    .props(
      PROP_TYPE, INPUT_TYPE_RADIO,
      PROP_CHECKED, true,
    );
  expect(input.dom.checked).toBe(true);
});

test('disabled', () => {
  const input = createInput()
    .props(
      PROP_TYPE, INPUT_TYPE_CHECKBOX,
      PROP_DISABLED, true,
    );
  expect(input.dom.disabled).toBe(true);
});
