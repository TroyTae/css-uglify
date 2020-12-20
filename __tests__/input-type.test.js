const {
  $,
  INPUT,
  TYPE,
  TEXT,
  RADIO,
  CHECKBOX,
} = require('../dist/index');

test('text', () => {
  const input = $(INPUT).set(TYPE, TEXT);
  expect(input.get(TYPE)).toBe(TEXT);
});

test('radio', () => {
  const input = $(INPUT).set(TYPE, RADIO);
  expect(input.get(TYPE)).toBe(RADIO);
});

test('disabled', () => {
  const input = $(INPUT).set(TYPE, CHECKBOX);
  expect(input.get(TYPE)).toBe(CHECKBOX);
});
