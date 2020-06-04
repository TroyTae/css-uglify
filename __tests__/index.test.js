const {
  setAttributes,
  setProperties,
  createDivElement,
  createInputElement,
} = require('../dist/index');

test('setAttributes', () => {
  const element = setAttributes(
    createDivElement(),
    {
      class: 'test',
      'data-animation': 'fade',
    },
  );
  expect(element.className).toBe('test');
  expect(element.getAttribute('class')).toBe('test');
  expect(element.getAttribute('data-animation')).toBe('fade');
  expect(element.getAttribute('test')).toBe(null);
});

test('setProperties', () => {
  const element = setProperties(
    setAttributes(
      createInputElement(),
      {
        type: 'checkbox',
        class: 'fake-class',
      },
    ),
    {
      disabled: true,
      value: 721,
      className: 'test',
    },
  );
  expect(element.checked).toBe(false);
  expect(element.disabled).toBe(true);
  expect(element.value).toBe('721');
  expect(element.className).toBe('test');
});
