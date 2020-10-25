const {
  $,
  TAG_NAME_ANCHOR,
  TAG_NAME_SPAN,
  TAG_NAME_INPUT,
  PROP_ID,
  PROP_TYPE,
  PROP_CLASS,
  PROP_VALUE,
  PROP_CHECKED,
  PROP_HREF,
  PROP_DISABLED,
  PROP_TEXT_CONTENT,
  PROP_INNER_HTML,
  PROP_OUTER_HTML,
  PROP_INNER_TEXT,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_CHECKBOX,
} = require('../dist/index');

test('id/class', () => {
  const id = 'some-id';
  const className = 'some-class';
  const input = $(TAG_NAME_INPUT)
    .prop(
      PROP_ID, id,
      PROP_CLASS, className,
    );
  expect(input.prop(PROP_ID)).toBe(id);
  expect(input.prop(PROP_CLASS)).toBe(className);
});

test('value', () => {
  const value = 'some-value';
  const input = $(TAG_NAME_INPUT)
    .prop(
      PROP_TYPE, INPUT_TYPE_TEXT,
      PROP_VALUE, value,
    );
  expect(input.prop(PROP_VALUE)).toBe(value);
});

test('checked/disabled', () => {
  const input = $(TAG_NAME_INPUT)
    .prop(
      PROP_TYPE, INPUT_TYPE_CHECKBOX,
      PROP_DISABLED, true,
      PROP_CHECKED, true,
    );
  expect(input.prop(PROP_DISABLED)).toBe(true);
  expect(input.prop(PROP_CHECKED)).toBe(true);
});

test('href', () => {
  const href = 'https://domain.com/link';
  const a = $(TAG_NAME_ANCHOR).prop(PROP_HREF, href);
  expect(a.prop(PROP_HREF)).toBe(href);
});

test('textContent/innerText', () => {
  const text = 'text';
  const span = $(TAG_NAME_SPAN);
  span.prop(PROP_TEXT_CONTENT, text);
  expect(span.prop(PROP_TEXT_CONTENT)).toBe(text);
  span.prop(PROP_INNER_TEXT, text);
  expect(span.prop(PROP_INNER_TEXT)).toBe(text);
});

test('innerHTML/outerHTML', () => {
  const a = $(TAG_NAME_ANCHOR)
    .prop(
      PROP_INNER_HTML,
      '<span></span>',
    );
  expect(a.prop(PROP_INNER_HTML)).toBe('<span></span>');
  expect(a.prop(PROP_OUTER_HTML)).toBe('<a><span></span></a>');
});
