const {
  $,
  TAG_NAME_INPUT,
  ATTR_TYPE,
  PROP_VALUE,
  PROP_CHECKED,
  PROP_DISABLED,
} = require('../dist/index');

test('Property: value', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_TYPE, 'text')
      .setProperties(PROP_VALUE, 'test-value')
      .dom[PROP_VALUE]
  ).toBe('test-value');
});

test('Property: checked', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_TYPE, 'checkbox')
      .setProperties(PROP_CHECKED, true)
      .dom[PROP_CHECKED]
  ).toBe(true);
});

test('Property: disabled', () => {
  expect(
    $(TAG_NAME_INPUT)
      .setAttributes(ATTR_TYPE, 'text')
      .setProperties(PROP_DISABLED, true)
      .dom[PROP_DISABLED]
  ).toBe(true);
});
