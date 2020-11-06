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
    .set(
      PROP_ID, id,
      PROP_CLASS, className,
    );
  expect(input.get(PROP_ID)).toBe(id);
  expect(input.get(PROP_CLASS)).toBe(className);
});

test('value', () => {
  const value = 'some-value';
  const input = $(TAG_NAME_INPUT)
    .set(
      PROP_TYPE, INPUT_TYPE_TEXT,
      PROP_VALUE, value,
    );
  expect(input.get(PROP_VALUE)).toBe(value);
});

test('checked/disabled', () => {
  const input = $(TAG_NAME_INPUT)
    .set(
      PROP_TYPE, INPUT_TYPE_CHECKBOX,
      PROP_DISABLED, true,
      PROP_CHECKED, true,
    );
  expect(input.get(PROP_DISABLED)).toBe(true);
  expect(input.get(PROP_CHECKED)).toBe(true);
});

test('href', () => {
  const href = 'https://domain.com/link';
  const a = $(TAG_NAME_ANCHOR).set(PROP_HREF, href);
  expect(a.get(PROP_HREF)).toBe(href);
});

test('textContent/innerText', () => {
  const text = 'text';
  const span = $(TAG_NAME_SPAN);
  span.set(PROP_TEXT_CONTENT, text);
  expect(span.get(PROP_TEXT_CONTENT)).toBe(text);
  span.set(PROP_INNER_TEXT, text);
  expect(span.get(PROP_INNER_TEXT)).toBe(text);
});

test('innerHTML/outerHTML', () => {
  const a = $(TAG_NAME_ANCHOR).set(PROP_INNER_HTML, '<span></span>');
  expect(a.get(PROP_INNER_HTML)).toBe('<span></span>');
  expect(a.get(PROP_OUTER_HTML)).toBe('<a><span></span></a>');
});
