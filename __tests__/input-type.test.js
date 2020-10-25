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
    .prop(PROP_TYPE, INPUT_TYPE_TEXT);
  expect(input.prop(PROP_TYPE)).toBe(INPUT_TYPE_TEXT);
});

test('radio', () => {
  const input = $(TAG_NAME_INPUT)
    .prop(PROP_TYPE, INPUT_TYPE_RADIO);
  expect(input.prop(PROP_TYPE)).toBe(INPUT_TYPE_RADIO);
});

test('disabled', () => {
  const input = $(TAG_NAME_INPUT)
    .prop(PROP_TYPE, INPUT_TYPE_CHECKBOX);
  expect(input.prop(PROP_TYPE)).toBe(INPUT_TYPE_CHECKBOX);
});
