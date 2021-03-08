const {
  $,
  DIV,
  PARAGRAPH,
  TEXT_CONTENT,
} = require('../dist/index');

test('string', () => {
  const text = 'Something Text';
  expect(
    $(PARAGRAPH)
      .add(text)
      .get(TEXT_CONTENT)
  ).toBe(text);
});

test('element', () => {
  const children = $(DIV)
    .add(
      document.createElement('input'),
      document.createElement('button'),
    )
    .dom
    .children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe('INPUTBUTTON');
});

test('noliter instance', () => {
  const children = $(DIV)
    .add(
      $(DIV),
      $(PARAGRAPH),
    )
    .dom
    .children;

  expect(children.length).toBe(2);
  expect(children[0].tagName + children[1].tagName).toBe('DIVP');
});
