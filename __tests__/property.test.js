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

test.skip('Property: value', () => {
  expect(
    $(TAG_NAME_INPUT)
      .attrs(ATTR_TYPE, INPUT_TYPE_TEXT)
      .props(PROP_VALUE, 'test-value')
      .dom[PROP_VALUE]
  ).toBe('test-value');
});

test.skip('Property: checked', () => {
  expect(
    $(TAG_NAME_INPUT)
      .attrs(ATTR_TYPE, INPUT_TYPE_CHECKBOX)
      .props(PROP_CHECKED, true)
      .dom[PROP_CHECKED]
  ).toBe(true);
});

test.skip('Property: disabled', () => {
  expect(
    $(TAG_NAME_INPUT)
      .attrs(ATTR_TYPE, INPUT_TYPE_RADIO)
      .props(PROP_DISABLED, true)
      .dom[PROP_DISABLED]
  ).toBe(true);
});
