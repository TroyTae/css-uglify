const {
  $,
  ANCHOR,
  SPAN,
  INPUT,
  ID,
  TYPE,
  CLASS,
  VALUE,
  CHECKED,
  HREF,
  DISABLED,
  TEXT_CONTENT,
  INNER_HTML,
  OUTER_HTML,
  INNER_TEXT,
  TEXT,
  CHECKBOX,
} = require('../dist/index');

test('id/class', () => {
  const id = 'some-id';
  const className = 'some-class';
  const input = $(INPUT)
    .set(
      ID, id,
      CLASS, className,
    );
  expect(input.get(ID)).toBe(id);
  expect(input.get(CLASS)).toBe(className);
});

test('value', () => {
  const value = 'some-value';
  const input = $(INPUT)
    .set(
      TYPE, TEXT,
      VALUE, value,
    );
  expect(input.get(VALUE)).toBe(value);
});

test('checked/disabled', () => {
  const input = $(INPUT)
    .set(
      TYPE, CHECKBOX,
      DISABLED, true,
      CHECKED, true,
    );
  expect(input.get(DISABLED)).toBe(true);
  expect(input.get(CHECKED)).toBe(true);
});

test('href', () => {
  const href = 'https://domain.com/link';
  const a = $(ANCHOR).set(HREF, href);
  expect(a.get(HREF)).toBe(href);
});

test('textContent/innerText', () => {
  const text = 'text';
  const span = $(SPAN);
  span.set(TEXT_CONTENT, text);
  expect(span.get(TEXT_CONTENT)).toBe(text);
  span.set(INNER_TEXT, text);
  expect(span.get(INNER_TEXT)).toBe(text);
});

test('innerHTML/outerHTML', () => {
  const a = $(ANCHOR).set(INNER_HTML, '<span></span>');
  expect(a.get(INNER_HTML)).toBe('<span></span>');
  expect(a.get(OUTER_HTML)).toBe('<a><span></span></a>');
});
