const {
  $,
  TAG_NAME_DIV,
  TAG_NAME_PARAGRAPH,
} = require('../dist/index');

test('string', () => {
  const text = 'Something Text';
  expect(
    $(TAG_NAME_PARAGRAPH)
      .append(text)
      .dom
      .textContent
  ).toBe(text);
});

test('element', () => {
  const children = $(TAG_NAME_DIV)
    .append(
      document.createElement('input'),
      document.createElement('button'),
    )
    .dom
    .children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe('INPUTBUTTON');
});

test('noliter instance', () => {
  const children = $(TAG_NAME_DIV)
    .append(
      $(TAG_NAME_DIV),
      $(TAG_NAME_PARAGRAPH),
    )
    .dom
    .children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe('DIVP');
});
