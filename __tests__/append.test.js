const {
  $,
  TAG_NAME_DIV,
  TAG_NAME_PARAGRAPH,
} = require('../dist/index');

test.skip('Append: string', () => {
  const text = 'Something Text';
  expect(
    $(TAG_NAME_PARAGRAPH)
      .append(text)
      .dom
      .textContent
  ).toBe(text);
});

test.skip('Append: element', () => {
  expect(
    $(TAG_NAME_DIV)
      .append(
        document.createElement(TAG_NAME_DIV),
        document.createElement(TAG_NAME_DIV),
        document.createElement(TAG_NAME_DIV)
      )
      .dom
      .children
      .length
  ).toBe(3);
});

test.skip('Append: noliter', () => {
  expect(
    $(TAG_NAME_DIV)
      .append(
        $(TAG_NAME_DIV),
        $(TAG_NAME_DIV),
        $(TAG_NAME_DIV)
      )
      .dom
      .children
      .length
  ).toBe(3);
});
