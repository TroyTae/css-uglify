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
  PROP_INNER_TEXT,
  INPUT_TYPE_TEXT,
  INPUT_TYPE_CHECKBOX,
} = require('../dist/index');

test('id/class', () => {
  const id = 'some-id';
  const className = 'some-class';
  const dom = $(TAG_NAME_INPUT)
    .props(
      PROP_ID, id,
      PROP_CLASS, className,
    )
    .dom;
  expect(dom.id).toBe(id);
  expect(dom.className).toBe(className);
});

test('value', () => {
  const value = 'some-value';
  const dom = $(TAG_NAME_INPUT)
    .props(
      PROP_TYPE, INPUT_TYPE_TEXT,
      PROP_VALUE, value,
    )
    .dom;
  expect(dom.value).toBe(value);
});

test('checked/disabled', () => {
  const dom = $(TAG_NAME_INPUT)
    .props(
      PROP_TYPE, INPUT_TYPE_CHECKBOX,
      PROP_DISABLED, true,
      PROP_CHECKED, true,
    )
    .dom;
  expect(dom.checked).toBe(true);
  expect(dom.disabled).toBe(true);
});

test('href', () => {
  const href = 'https://domain.com/link';
  const dom = $(TAG_NAME_ANCHOR)
    .props(PROP_HREF, href)
    .dom;
  expect(dom.href).toBe(href);
});

test('textContent/innerText', () => {
  const text = 'text';
  const span = $(TAG_NAME_SPAN);
  span.props(PROP_TEXT_CONTENT, text);
  expect(span.dom.textContent).toBe(text);
  span.props(PROP_INNER_TEXT, text);
  expect(span.dom.innerText).toBe(text);
});
