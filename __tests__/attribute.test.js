const {
  $,
  TAG_NAME_ANCHOR,
  TAG_NAME_INPUT,
  ATTR_ID,
  ATTR_VALUE,
  ATTR_CLASS,
  ATTR_TYPE,
  ATTR_STYLE,
  ATTR_HREF,
} = require('../dist/index');

test('id/class', () => {
  const id = 'some-id';
  const className = 'some-class';
  const input = $(TAG_NAME_INPUT)
    .sa(
      ATTR_ID, id,
      ATTR_CLASS, className,
    );
  expect(input.ga(ATTR_ID)).toBe(id);
  expect(input.ga(ATTR_CLASS)).toBe(className);
});

test('value', () => {
  const value = 'some-value';
  const input = $(TAG_NAME_INPUT).sa(ATTR_VALUE, value);
  expect(input.ga(ATTR_VALUE)).toBe(value);
});

test('type', () => {
  const type = 'button';
  const input = $(TAG_NAME_INPUT).sa(ATTR_TYPE, type);
  expect(input.ga(ATTR_TYPE)).toBe(type);
});

test('style', () => {
  const style = 'display: none;';
  const input = $(TAG_NAME_INPUT).sa(ATTR_STYLE, style);
  expect(input.ga(ATTR_STYLE)).toBe(style);
});

test('href', () => {
  const href = 'https://domain.com/link';
  const a = $(TAG_NAME_ANCHOR).sa(ATTR_HREF, href);
  expect(a.ga(ATTR_HREF)).toBe(href);
});
