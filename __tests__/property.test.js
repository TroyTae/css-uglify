const {
  $,
  TAG_NAME_INPUT,
  ATTR_TYPE,
  PROP_VALUE,
  PROP_CHECKED,
  PROP_DISABLED,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_CHECKBOX,
  INPUT_TYPE_RADIO,
} = require('../dist/index');

test('Property: value', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_TYPE, INPUT_TYPE_TEXT)
      .setProperties(PROP_VALUE, 'test-value')
      .dom[PROP_VALUE]
  ).toBe('test-value');
});

test('Property: checked', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_TYPE, INPUT_TYPE_CHECKBOX)
      .setProperties(PROP_CHECKED, true)
      .dom[PROP_CHECKED]
  ).toBe(true);
});

test('Property: disabled', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_TYPE, INPUT_TYPE_RADIO)
      .setProperties(PROP_DISABLED, true)
      .dom[PROP_DISABLED]
  ).toBe(true);
});
