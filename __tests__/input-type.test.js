const {
  $,
  TAG_NAME_INPUT,
  PROP_TYPE,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_RADIO,
  INPUT_TYPE_CHECKBOX,
} = require('../dist/index');

test('text', () => {
  const input = $(TAG_NAME_INPUT)
    .props(PROP_TYPE, INPUT_TYPE_TEXT);
  expect(input.dom.type).toBe(INPUT_TYPE_TEXT);
});

test('radio', () => {
  const input = $(TAG_NAME_INPUT)
    .props(PROP_TYPE, INPUT_TYPE_RADIO);
  expect(input.dom.type).toBe(INPUT_TYPE_RADIO);
});

test('disabled', () => {
  const input = $(TAG_NAME_INPUT)
    .props(PROP_TYPE, INPUT_TYPE_CHECKBOX);
  expect(input.dom.type).toBe(INPUT_TYPE_CHECKBOX);
});
